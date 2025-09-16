// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Separator } from "@/components/ui/separator";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   User,
//   Mail,
//   Flag,
//   Folder,
//   Hash,
//   ListTodo,
//   History,
//   AlertCircle,
//   ClipboardList,
//   Info as InfoIcon,
//   FileText,
//   BugIcon,
//   ArrowLeft,
// } from "lucide-react";
// import SubTaskList from "@/modules/Tasks/sub-task/SubTaskList";
// import ReportBugModal from "@/modules/Tasks/sub-task/ReportBugModal";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchTaskById,
//   updateTaskStatus,
//   updateTaskReviewStatus,
// } from "@/features/taskSlice";
// import { formatDateUTC } from "@/utils/formatDate";
// import { Button } from "@/components/ui/button";
// import { useCurrentUser } from "@/hooks/useCurrentUser";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";

// const reviewStatusColors = {
//   Approved: "bg-green-100 text-green-800 border-green-200",
//   Rejected: "bg-red-100 text-red-800 border-red-200",
//   Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
//   Resolved: "bg-blue-100 text-blue-800 border-blue-200",
// };

// const TaskView = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const params = useParams();
//   const task_id = params.id;

//   const task = useSelector((state) => state.task.currentTask);
//   const loading = useSelector((state) => state.task.status === "loading");
//   const updating = useSelector((state) => state.task.updating); // Added for update status
//   const error = useSelector((state) => state.task.error);
//   const { currentUser } = useCurrentUser(task?.teamLeadId);

//   const [isReportBugOpen, setIsReportBugOpen] = useState(false);

//   const isTeamLead = task?.teamLeadId === currentUser?.id;

//   const canReportBug =
//     (isTeamLead ||
//       currentUser?.role === "cpc" ||
//       currentUser?.position === "Team Lead") &&
//     task?.status === "Completed";

//   const isTaskClosed = task?.status === "Completed";

//   useEffect(() => {
//     if (task_id) {
//       dispatch(fetchTaskById(task_id));
//     }
//   }, [dispatch, task_id]);

//   // Handle marking task as completed
//   const handleMarkAsResolved = async () => {
//     if (isTaskClosed) return;
//     try {
//       await dispatch(
//         updateTaskReviewStatus({ task_id: task_id, reviewStatus: "Resolved" })
//       );
//       // await dispatch(updateTaskStatus({ taskId: task_id, status: 'Completed' }));
//       toast.success("Task marked as Completed");
//     } catch (err) {
//       toast.error(error || "Failed to mark task as Completed");
//     }
//   };

//   const getPriorityVariant = (priority) => {
//     switch (priority) {
//       case "High":
//         return "destructive";
//       case "Medium":
//         return "default";
//       case "Low":
//         return "secondary";
//       default:
//         return "outline";
//     }
//   };
//   const getStatusVariant = (status) => {
//     if (status === "Completed") return "success";
//     if (status === "In Progress") return "warning";
//     return "secondary"; // For Pending
//   };

//   return (
//     <TooltipProvider>
//       <div className="p-3 sm:p-4">
//         <Card className="shadow-lg">
//           <CardHeader>
//             <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
//               {/* Back Button: Top Left */}

//               <button
//                 onClick={() => router.back()}
//                 className="inline-flex cursor-pointer items-center gap-2 bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 <svg
//                   className="h-4 w-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M15 19l-7-7 7-7"
//                   />
//                 </svg>
//                 Back
//               </button>

//               <Badge
//                 variant={isTaskClosed ? "destructive" : "default"}
//                 className="ml-2 text-xs sm:text-sm"
//               >
//                 {task?.status}
//               </Badge>
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             {loading && <div className="text-center text-sm">Loading...</div>}
//             {error && (
//               <div className="text-center text-sm text-red-500">
//                 Error: {error}
//               </div>
//             )}
//             {task && (
//               <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-3 sm:gap-4 lg:gap-6">
//                 {/* Left Column (Task Details & Subtasks) */}
//                 <div className="space-y-4">
//                   <section>
//                     <h3 className="text-base sm:text-lg font-semibold mb-3 flex items-center">
//                       <InfoIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
//                       Task Details
//                     </h3>
//                     <div className="space-y-4">
//                       {/* Row 0: task Id */}

//                       <div>
//                         <label className="text-xs sm:text-sm font-medium text-gray-600">
//                           Task ID
//                         </label>
//                         <div className="flex items-center mt-1">
//                           <span className="font-medium text-sm sm:text-base">
//                             {task?.task_id}
//                           </span>
//                         </div>
//                       </div>
//                       {/* Row 1: Title */}

//                       <div>
//                         <label className="text-xs sm:text-sm font-medium text-gray-600">
//                           Title
//                         </label>
//                         <div className="flex items-center mt-1">
//                           <span className="font-medium text-sm sm:text-base">
//                             {task?.title}
//                           </span>
//                         </div>
//                       </div>
//                       {/* Row 2: Priority & Project */}
//                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div>
//                           <label className="text-xs sm:text-sm font-medium text-gray-600">
//                             Project
//                           </label>
//                           <div className="flex items-center mt-1">
//                             <span className="font-medium text-sm">
//                               {task?.projectName}
//                             </span>
//                           </div>
//                         </div>
//                         <div>
//                           <label className="text-xs sm:text-sm font-medium text-gray-600">
//                             Priority
//                           </label>
//                           <div className="flex items-center mt-1">
//                             <Badge
//                               variant={getPriorityVariant(task?.priority)}
//                               className="text-sm"
//                             >
//                               {task?.priority}
//                             </Badge>
//                           </div>
//                         </div>
//                       </div>
//                       {/* Row 3: Description */}
//                       <div>
//                         <label className="text-xs sm:text-sm font-medium text-gray-600">
//                           Description
//                         </label>
//                         <div className="flex items-start mt-1">
//                           <AlertCircle className="mr-2 h-4 w-4 text-gray-500 mt-1" />
//                           <span className="font-medium text-sm">
//                             {task?.description}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </section>
//                   <Separator className="my-3" />
//                   {/* Subtask List */}
//                   <SubTaskList
//                     isTaskClosed={isTaskClosed}
//                     task={task}
//                     taskId={task?.task_id}
//                   />
//                 </div>
//                 {/* Right Column (Owner, Actions, History) */}
//                 <div className="space-y-4">
//                   <section>
//                     <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
//                       <User className="mr-2 h-5 w-5 text-purple-500" />
//                       Assigned Details
//                     </h3>

//                     <div className="grid grid-cols-1 gap-6">
//                       {/* Owner and Assignment Details */}
//                       <div className="space-y-4">
//                         <div className="flex items-center gap-3">
//                           <User className="h-5 w-5 text-gray-500" />
//                           <div>
//                             <div className="text-xs text-gray-500">
//                               Assigned To
//                             </div>
//                             <div className="text-sm font-medium text-gray-800">
//                               {task?.assignedToDetails?.memberName || "N/A"}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-3">
//                           <AlertCircle className="h-5 w-5 text-gray-500" />
//                           <div>
//                             <div className="text-xs text-gray-500">
//                               Assigned By
//                             </div>
//                             <div className="text-sm font-medium text-gray-800">
//                               {task?.assignedBy || "N/A"}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-3">
//                           <Mail className="h-5 w-5 text-gray-500" />
//                           <div>
//                             <div className="text-xs text-gray-500">
//                               Deadline
//                             </div>
//                             <div className="text-sm font-medium text-gray-800">
//                               {formatDateUTC(task?.deadline) || "N/A"}
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Actions */}
//                       <div className="space-y-4">
//                         <h4 className="text-xs sm:text-sm font-semibold text-gray-700">
//                           Actions
//                         </h4>
//                         <div className="flex flex-col gap-2">
//                           <Tooltip>
//                             {(currentUser?.role === "cpc" ||
//                               currentUser?.position === "Team Lead" ||
//                               isTeamLead) &&
//                               task?.reviewStatus == "N/A" && (
//                                 <TooltipTrigger asChild>
//                                   <Button
//                                     className={`w-full text-xs sm:text-sm h-8 sm:h-9 px-3 rounded-md flex items-center justify-center bg-green-600 text-white hover:bg-green-700 ${
//                                       isTaskClosed || updating
//                                         ? "opacity-50 cursor-not-allowed"
//                                         : ""
//                                     }`}
//                                     onClick={handleMarkAsResolved}
//                                     disabled={isTaskClosed || updating}
//                                   >
//                                     <ListTodo className="mr-2 h-4 w-4" />
//                                     {updating
//                                       ? "Updating..."
//                                       : "Mark as Resolved"}
//                                   </Button>
//                                 </TooltipTrigger>
//                               )}

//                             <TooltipContent>
//                               {isTaskClosed
//                                 ? "Task is already Resolved"
//                                 : "Mark the Task as Resolved"}
//                             </TooltipContent>
//                           </Tooltip>

//                           {task?.status === "Completed" && canReportBug && (
//                             <Button
//                               className="w-full text-xs sm:text-sm h-8 sm:h-9 px-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
//                               onClick={() => setIsReportBugOpen(true)}
//                             >
//                               <BugIcon className="mr-2 h-4 w-4" />
//                               Report Bug
//                             </Button>
//                           )}

//                           {isReportBugOpen && (
//                             <ReportBugModal
//                               onClose={() => setIsReportBugOpen(false)}
//                             />
//                           )}
//                         </div>
//                       </div>

//                       {/* Review History */}
//                       <div className="space-y-4">
//                         <h4 className="text-xs sm:text-sm font-semibold text-gray-700">
//                           Review History
//                         </h4>
//                         {task?.taskHistory && task.taskHistory.length > 0 ? (
//                           <ul className="space-y-2">
//                             {task.taskHistory.map((entry, index) => (
//                               <li
//                                 key={index}
//                                 className="bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition-all"
//                               >
//                                 <div className="flex justify-between items-center text-sm mb-1">
//                                   <span className="font-semibold text-gray-800 truncate max-w-[150px]">
//                                     {entry.bugTitle || "Untitled"}
//                                   </span>
//                                   <span className="text-xs text-gray-500 whitespace-nowrap">
//                                     {entry.timestamp
//                                       ? formatDateUTC(entry.timestamp)
//                                       : "N/A"}
//                                   </span>
//                                 </div>
//                                 <div className="flex justify-between items-center text-xs text-gray-600">
//                                   <span className="italic">
//                                     {entry.bugStatus || "Unknown"}
//                                   </span>
//                                   <span
//                                     className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
//                                       reviewStatusColors[
//                                         entry.reviewStatus?.toUpperCase()
//                                       ] ||
//                                       "bg-gray-100 text-gray-800 border-gray-300"
//                                     }`}
//                                   >
//                                     {entry.reviewStatus || "N/A"}
//                                   </span>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         ) : (
//                           <div className="flex items-center justify-center h-[100px] text-gray-600 border border-dashed rounded-lg">
//                             <div className="text-center">
//                               <FileText className="h-6 w-6 mx-auto mb-2 opacity-50" />
//                               <p className="text-sm">
//                                 No review history available
//                               </p>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </section>
//                 </div>
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </TooltipProvider>
//   );
// };

// export default TaskView;




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
  Folder,
  Hash,
  ListTodo,
  History,
  ClipboardList,
  Info as InfoIcon,
  FileText,
  Bug as BugIcon,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SubTaskList from "@/modules/Tasks/sub-task/SubTaskList";
import ReportBugModal from "@/modules/Tasks/sub-task/ReportBugModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTaskById,
  updateTaskStatus,
  updateTaskReviewStatus,
} from "@/features/taskSlice";
import { formatDateUTC } from "@/utils/formatDate";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

const reviewStatusColors = {
  Approved: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Rejected: "bg-rose-100 text-rose-800 border-rose-200",
  Pending: "bg-amber-100 text-amber-800 border-amber-200",
  Resolved: "bg-sky-100 text-sky-800 border-sky-200",
};

const statusColors = {
  Completed: "bg-emerald-600 text-white",
  "In Progress": "bg-amber-600 text-white",
  Pending: "bg-slate-600 text-white",
};

const TaskView = () => {
  
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();
  const task_id = params.id;
  // console.log(params);

  const task = useSelector((state) => state.task.currentTask);
  const loading = useSelector((state) => state.task.status === "loading");
  const updating = useSelector((state) => state.task.updating);
  const error = useSelector((state) => state.task.error);
  const { currentUser } = useCurrentUser(task?.teamLeadId);

  const [isReportBugOpen, setIsReportBugOpen] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [isDelayDialogOpen, setIsDelayDialogOpen] = useState(false);
  const [delayReason, setDelayReason] = useState("");
  const [pendingStatus, setPendingStatus] = useState(null);

  const isTeamLead = task?.teamLeadId === currentUser?.id;
  const isCPC = currentUser?.role === "cpc";
  const isTL = isTeamLead || currentUser?.position === "Team Lead";
  const isAssigned = task?.assignedTo === currentUser?.id;

  const isTaskClosed = task?.status === "Completed";

  useEffect(() => {
    if (task_id) {
      dispatch(fetchTaskById(task_id));
    }
  }, [dispatch, task_id]);

  const canShowUpdateStatusButton = () => {
    return isAssigned && !!getStatusButtonText(task?.status);
  };

  const canShowMarkResolvedButton = () => {
    return isTeamLead && task?.reviewStatus === "N/A" && task?.status === "Completed";
  };

  const canShowReportBugButton = () => {
    return (isTL || isCPC) && task?.status === "Completed";
  };

  const handleUpdateStatus = async (newStatus) => {
    if (updating) return;

    if (newStatus === "Completed") {
      const now = formatDateUTC(new Date());
      const deadlineDate = formatDateUTC(new Date(task?.deadline));
      // console.log(now, deadlineDate);
      
      if (now > deadlineDate) {
        setPendingStatus(newStatus);
        setIsDelayDialogOpen(true);
        return;
      }
    }

    try {
      await dispatch(updateTaskStatus({ taskId: task_id, status: newStatus }));
      toast.success(`Task status updated to ${newStatus}`);
      dispatch(fetchTaskById(task_id));
    } catch (err) {
      toast.error("Failed to update task status");
    }
  };

  const handleSubmitDelayReason = async () => {
    if (updating || !delayReason.trim()) return;

    try {
      await dispatch(
        updateTaskStatus({
          taskId: task_id,
          status: pendingStatus,
          delayReason,
        })
      );
      toast.success(`Task status updated to ${pendingStatus}`);
      dispatch(fetchTaskById(task_id));
      setIsDelayDialogOpen(false);
      setDelayReason("");
      setPendingStatus(null);
    } catch (err) {
      toast.error("Failed to update task status");
    }
  };

  const handleMarkAsResolved = async () => {
    if (updating) return;
    try {
      await dispatch(
        updateTaskReviewStatus({ task_id: task_id, reviewStatus: "Resolved" })
      );
      await dispatch(updateTaskStatus({ taskId: task_id, status: "Completed" }));
      toast.success("Task marked as Resolved and fully closed");
    } catch (err) {
      toast.error("Failed to mark task as Resolved");
    }
  };

  const handleReportBug = () => {
    setIsReportBugOpen(true);
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

  const getStatusButtonText = (status) => {
    if (status === "Pending") return "Start Task";
    if (status === "In Progress") return "Mark Completed";
    if (status === "Completed") return "Reopen Task";
    return null;
  };

  const getNextStatus = (status) => {
    if (status === "Pending") return "In Progress";
    if (status === "In Progress") return "Completed";
    if (status === "Completed") return "In Progress";
    return null;
  };

  const desc = task?.description || "";
  const isLongDesc = desc.length > 500;

  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Card className="shadow-xl rounded-2xl overflow-hidden border border-slate-200">
          <CardHeader className="bg-transparent border-b border-slate-200">
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.back()}
                className="inline-flex cursor-pointer items-center gap-2 bg-blue-700 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <CardTitle className="text-lg sm:text-xl text-blue-600"></CardTitle>
              <Badge
                className={`${statusColors[task?.status] || "bg-slate-600 text-white"} text-xs sm:text-sm px-3 py-1 rounded-full`}
              >
                {task?.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            {loading ? (
              <div className="space-y-6">
                <div className="flex justify-end gap-2">
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-8 w-32" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <Skeleton className="h-20 w-full" />
                </div>
                <Separator />
                <div className="space-y-4">
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-40" />
                    <Skeleton className="h-32 w-full" />
                  </div>
                </div>
              </div>
            ) : error || !task ? (
              <div className="flex items-center justify-center w-full h-[80vh] bg-muted/5">
                <div className="text-center text-xl font-bold text-black">
                  Task not found
                </div>
              </div>
            ) : (
              <>
                {/* Actions Bar at Top */}
                <div className="flex flex-wrap justify-end gap-2 mb-6">
                  {canShowUpdateStatusButton() && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          className={`bg-blue-600 text-white hover:bg-blue-700 rounded-full shadow-md ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
                          onClick={() => handleUpdateStatus(getNextStatus(task?.status))}
                          disabled={updating}
                        >
                          <ListTodo className="h-4 w-4" />
                          <span className="ml-2 hidden sm:inline">{getStatusButtonText(task?.status)}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>{getStatusButtonText(task?.status)}</TooltipContent>
                    </Tooltip>
                  )}

                  {canShowMarkResolvedButton() && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          className={`bg-teal-600 text-white hover:bg-teal-700 rounded-full shadow-md ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
                          onClick={handleMarkAsResolved}
                          disabled={updating}
                        >
                          <ClipboardList className="h-4 w-4" />
                          <span className="ml-2 hidden sm:inline">{updating ? "Updating..." : "Mark as Resolved"}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Mark the Task as Resolved and Close</TooltipContent>
                    </Tooltip>
                  )}

                  {canShowReportBugButton() && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="sm"
                          className="bg-rose-600 text-white hover:bg-rose-700 rounded-full shadow-md"
                          onClick={handleReportBug}
                        >
                          <BugIcon className="h-4 w-4" />
                          <span className="ml-2 hidden sm:inline">Report Bug</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Report Bug</TooltipContent>
                    </Tooltip>
                  )}
                </div>

                {/* Single Column Layout */}
                <div className="space-y-6">
                  {/* Task Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                      <InfoIcon className="mr-2 h-5 w-5" />
                      Task Details
                    </h3>
                    <div className="space-y-4 text-sm">
                      <div>
                        <label className="block text-xs font-medium text-slate-500">Task ID</label>
                        <p className="font-medium">{task?.task_id}</p>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500">Title</label>
                        <p className="font-medium">{task?.title}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-500">Project</label>
                          <p className="font-medium">{task?.projectName}</p>
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-slate-500">Priority</label>
                          <Badge variant={getPriorityVariant(task?.priority)} className="mt-1">
                            {task?.priority}
                          </Badge>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-500">Description</label>
                        <div className="flex items-start">
                          <div className="flex-grow">
                            {isLongDesc && !showFullDesc ? (
                              <>
                                <p>{desc.slice(0, 500)}...</p>
                                <button
                                  onClick={() => setShowFullDesc(true)}
                                  className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
                                >
                                  View more <ChevronDown className="ml-1 h-4 w-4" />
                                </button>
                              </>
                            ) : (
                              <>
                                <p>{desc}</p>
                                {isLongDesc && (
                                  <button
                                    onClick={() => setShowFullDesc(false)}
                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-1 flex items-center"
                                  >
                                    View less <ChevronUp className="ml-1 h-4 w-4" />
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Subtask List */}
                  <SubTaskList
                    isTaskClosed={isTaskClosed}
                    task={task}
                    taskId={task?.task_id}
                  />

                  <Separator />

                  {/* Assigned Details and Review History in Two Columns */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Assigned Details */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                        <User className="mr-2 h-5 w-5" />
                        Assigned Details
                      </h3>
                      <div className="space-y-4 text-sm">
                        <div className="flex items-center gap-3">
                          <User className="h-5 w-5 text-slate-500" />
                          <div>
                            <div className="text-xs text-slate-500">Assigned To</div>
                            <div className="font-medium">{task?.assignedToDetails?.memberName || "N/A"}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Hash className="h-5 w-5 text-slate-500" />
                          <div>
                            <div className="text-xs text-slate-500">Assigned By</div>
                            <div className="font-medium">{task?.assignedBy || "N/A"}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-slate-500" />
                          <div>
                            <div className="text-xs text-slate-500">Deadline</div>
                            <div className="font-medium">{formatDateUTC(task?.deadline) || "N/A"}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Review History */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                        <History className="mr-2 h-5 w-5" />
                        Review History
                      </h3>
                      {task?.taskHistory && task.taskHistory.length > 0 ? (
                        <ul className="space-y-3">
                          {task.taskHistory.map((entry, index) => (
                            <li
                              key={index}
                              className="bg-slate-50 border border-slate-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-all"
                            >
                              <div className="flex justify-between items-center text-sm mb-1">
                                <span className="font-semibold truncate max-w-[150px]">
                                  {entry.bugTitle || "Untitled"}
                                </span>
                                <span className="text-xs text-slate-500 whitespace-nowrap">
                                  {entry.timestamp ? formatDateUTC(entry.timestamp) : "N/A"}
                                </span>
                              </div>
                              <div className="flex justify-between items-center text-xs text-slate-600">
                                <span className="italic">{entry.bugStatus || "Unknown"}</span>
                                <Badge
                                  className={`${
                                    reviewStatusColors[entry.reviewStatus?.toUpperCase()] ||
                                    "bg-slate-100 text-slate-800"
                                  } text-[10px] px-2 py-0.5 rounded-full`}
                                >
                                  {entry.reviewStatus || "N/A"}
                                </Badge>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex items-center justify-center h-24 text-slate-600 border border-dashed rounded-lg">
                          <div className="text-center">
                            <FileText className="h-6 w-6 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No review history available</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
      {isReportBugOpen && (
        <ReportBugModal onClose={() => setIsReportBugOpen(false)} task_id={task_id}  />
      )}
      
      <Dialog open={isDelayDialogOpen} onOpenChange={setIsDelayDialogOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Deadline Passed!.</DialogTitle>
    </DialogHeader>
    <div className="py-4">
      <Label htmlFor="delayReason">Reason ?</Label>
      <textarea
        id="delayReason"
        value={delayReason}
        onChange={(e) => setDelayReason(e.target.value)}
        placeholder="Enter delay reason..."
        className="w-full mt-2 min-h-[50vh] p-3 bg-muted/10 rounded-md text-sm text-gray-800 placeholder:text-gray-400 focus:outline-1 focus:ring-0 border-0"
      />
    </div>
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsDelayDialogOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleSubmitDelayReason} disabled={!delayReason.trim() || updating}>
        Submit
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

    </TooltipProvider>
  );
};

export default TaskView;