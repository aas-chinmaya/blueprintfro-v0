



"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  User,
  Mail,
  Flag,
  Folder,
  Hash,
  ListTodo,
  History,
  AlertCircle,
  ClipboardList,
  Info as InfoIcon,
  FileText,
  BugIcon,
  ArrowLeft,
} from "lucide-react";
import SubTaskList from "@/modules/Tasks/sub-task/SubTaskList";
import ReportBugModal from "@/modules/Tasks/sub-task/ReportBugModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskById, updateTaskStatus,updateTaskReviewStatus } from "@/features/taskSlice";
import { formatDateUTC } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from 'sonner';
import { useRouter } from "next/navigation";

const reviewStatusColors = {
  Approved: "bg-green-100 text-green-800 border-green-200",
  Rejected: "bg-red-100 text-red-800 border-red-200",
  Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Resolved: "bg-blue-100 text-blue-800 border-blue-200",
};

const TaskView = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();
  const task_id = params.id;

  const task = useSelector((state) => state.task.currentTask);
  const loading = useSelector((state) => state.task.status === "loading");
  const updating = useSelector((state) => state.task.updating); // Added for update status
  const error = useSelector((state) => state.task.error);
  const { currentUser } = useCurrentUser(task?.teamLeadId);

  const [isReportBugOpen, setIsReportBugOpen] = useState(false);

  const isTeamLead = task?.teamLeadId === currentUser?.id;
  
  const canReportBug =
    (isTeamLead ||
      currentUser?.role === "cpc" ||
      currentUser?.position === "Team Lead") &&
    task?.status === "Completed";

  const isTaskClosed = task?.status === 'Completed';

  useEffect(() => {
    if (task_id) {
      dispatch(fetchTaskById(task_id));
    }
  }, [dispatch, task_id]);

  // Handle marking task as completed
  const handleMarkAsResolved = async () => {
    if (isTaskClosed) return;
    try {
      await dispatch(updateTaskReviewStatus({ task_id: task_id, reviewStatus: "Resolved", }));
      // await dispatch(updateTaskStatus({ taskId: task_id, status: 'Completed' }));
      toast.success('Task marked as Completed');
    } catch (err) {
      toast.error(error || 'Failed to mark task as Completed');
    }
  };

  const getPriorityVariant = (priority) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "default";
      case "Low":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <TooltipProvider>
      <div className="p-3 sm:p-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
               {/* Back Button: Top Left */}
             
                 <button
                  onClick={() => router.back()}
                  className="inline-flex cursor-pointer items-center gap-2 bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>
              
              <Badge
                variant={isTaskClosed ? "destructive" : "default"}
                className="ml-2 text-xs sm:text-sm"
              >
                {task?.status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading && <div className="text-center text-sm">Loading...</div>}
            {error && <div className="text-center text-sm text-red-500">Error: {error}</div>}
            {/* {!loading && !error && !task && <div className="text-center text-sm">No task found</div>} */}
            {task && (
              <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-3 sm:gap-4 lg:gap-6">
                {/* Left Column (Task Details & Subtasks) */}
                <div className="space-y-4">
                  <section>
                    <h3 className="text-base sm:text-lg font-semibold mb-3 flex items-center">
                      <InfoIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                      Task Details
                    </h3>
                    <div className="space-y-4">
                      {/* Row 0: task Id */}
                      
                      <div>
                        <label className="text-xs sm:text-sm font-medium text-gray-600">
                          Task ID
                        </label>
                        <div className="flex items-center mt-1">
                          <span className="font-medium text-sm sm:text-base">
                            {task?.task_id}
                          </span>
                        </div>
                      </div>
                      {/* Row 1: Title */}

                      <div>
                        <label className="text-xs sm:text-sm font-medium text-gray-600">
                          Title
                        </label>
                        <div className="flex items-center mt-1">
                          <span className="font-medium text-sm sm:text-base">
                            {task?.title}
                          </span>
                        </div>
                      </div>
                      {/* Row 2: Priority & Project */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs sm:text-sm font-medium text-gray-600">
                            Project
                          </label>
                          <div className="flex items-center mt-1">
                            <span className="font-medium text-sm">
                              {task?.projectName}
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className="text-xs sm:text-sm font-medium text-gray-600">
                            Priority
                          </label>
                          <div className="flex items-center mt-1">
                            <Badge
                              variant={getPriorityVariant(task?.priority)}
                              className="text-sm"
                            >
                              {task?.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      {/* Row 3: Description */}
                      <div>
                        <label className="text-xs sm:text-sm font-medium text-gray-600">
                          Description
                        </label>
                        <div className="flex items-start mt-1">
                          <AlertCircle className="mr-2 h-4 w-4 text-gray-500 mt-1" />
                          <span className="font-medium text-sm">
                            {task?.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <Separator className="my-3" />
                  {/* Subtask List */}
                  <SubTaskList
                    isTaskClosed={isTaskClosed}
                    task={task}
                    taskId={task?.task_id}
                  
                  />
                </div>
                {/* Right Column (Owner, Actions, History) */}
                <div className="space-y-4">
                 

                  <section>
  <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
    <User className="mr-2 h-5 w-5 text-purple-500" />
    Assigned Details
  </h3>

  <div className="grid grid-cols-1 gap-6">
    
    {/* Owner and Assignment Details */}
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <User className="h-5 w-5 text-gray-500" />
        <div>
          <div className="text-xs text-gray-500">Assigned To</div>
          <div className="text-sm font-medium text-gray-800">
            {task?.assignedToDetails?.memberName || "N/A"}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <AlertCircle className="h-5 w-5 text-gray-500" />
        <div>
          <div className="text-xs text-gray-500">Assigned By</div>
          <div className="text-sm font-medium text-gray-800">
            {task?.assignedBy || "N/A"}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-gray-500" />
        <div>
          <div className="text-xs text-gray-500">Deadline</div>
          <div className="text-sm font-medium text-gray-800">
            {formatDateUTC(task?.deadline) || "N/A"}
          </div>
        </div>
      </div>
    </div>

    {/* Actions */}
    <div className="space-y-4">
      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Actions</h4>
      <div className="flex flex-col gap-2">
        <Tooltip>
          {(currentUser?.role === "cpc" || currentUser?.position === "Team Lead" || isTeamLead) &&(task?.reviewStatus == "N/A")&& (
              <TooltipTrigger asChild>
                <Button
                  className={`w-full text-xs sm:text-sm h-8 sm:h-9 px-3 rounded-md flex items-center justify-center bg-green-600 text-white hover:bg-green-700 ${
                    isTaskClosed || updating ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={handleMarkAsResolved}
                  disabled={isTaskClosed || updating}
                >
                  <ListTodo className="mr-2 h-4 w-4" />
                  {updating ? 'Updating...' : 'Mark as Resolved'}
                </Button>
              </TooltipTrigger>
            )}

          <TooltipContent>
            {isTaskClosed ? "Task is already Resolved" : "Mark the Task as Resolved"}
          </TooltipContent>
        </Tooltip>

        {task?.status === "Completed" && canReportBug && (
          <Button
            className="w-full text-xs sm:text-sm h-8 sm:h-9 px-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
            onClick={() => setIsReportBugOpen(true)}
          >
            <BugIcon className="mr-2 h-4 w-4" />
            Report Bug
          </Button>
        )}

        {isReportBugOpen && (
          <ReportBugModal onClose={() => setIsReportBugOpen(false)} />
        )}
      </div>
    </div>

    {/* Review History */}
    <div className="space-y-4">
      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Review History</h4>
      {task?.taskHistory && task.taskHistory.length > 0 ? (
        <ul className="space-y-2">
          {task.taskHistory.map((entry, index) => (
            <li key={index} className="bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="font-semibold text-gray-800 truncate max-w-[150px]">
                  {entry.bugTitle || "Untitled"}
                </span>
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {entry.timestamp ? formatDateUTC(entry.timestamp) : "N/A"}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-600">
                <span className="italic">{entry.bugStatus || "Unknown"}</span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                    reviewStatusColors[entry.reviewStatus?.toUpperCase()] || "bg-gray-100 text-gray-800 border-gray-300"
                  }`}
                >
                  {entry.reviewStatus || "N/A"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center h-[100px] text-gray-600 border border-dashed rounded-lg">
          <div className="text-center">
            <FileText className="h-6 w-6 mx-auto mb-2 opacity-50" />
            <p className="text-sm">No review history available</p>
          </div>
        </div>
      )}
    </div>
  </div>
</section>

                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default TaskView;