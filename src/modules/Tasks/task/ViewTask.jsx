


// "use client";

// import { useState } from 'react';
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
// } from 'lucide-react';
// import SubtaskList from '@/modules/Tasks/sub-task/SubTaskList';
// import CloseTaskModal from '@/modules/Tasks/sub-task/CloseTaskModal';
// import ReportBugModal from '@/modules/Tasks/sub-task/ReportBugModal';
// import { useParams } from 'next/navigation';

// const TaskView = () => {

//     const params = useParams();
//     const task_id = params.id;

//   // Task data
//   const [task, setTask] = useState({
//     id: 'TASK-123',
//     title: 'Implement Feature X',
//     description: 'Develop and integrate the new feature into the main application.',
//     priority: 'High',
//     project: 'Project Alpha',
//     status: 'Open',
//   });

//   // Owner data
//   const [owner] = useState({
//     name: 'John Doe',
//     role: 'Developer',
//     email: 'john.doe@example.com',
//   });

//   // Review history
//   const [history] = useState([
//     { date: '2025-09-01', message: 'Initial review: Approved' },
//     { date: '2025-09-05', message: 'Progress update: 30% complete' },
//     { date: '2025-09-10', message: 'Bug found and reported' },
//   ]);



//   // Modal states
//   const [openCloseTask, setOpenCloseTask] = useState(true); // Open by default for demo
//   const isTaskClosed = task.status === 'Closed';
//   // const closedSubtasks = subtasks.filter((st) => st.status === 'Closed').length;
//   // const allClosed = closedSubtasks === subtasks.length;

//   // Handlers
//   const handleCloseTask = () => {
//     if (isTaskClosed || !allClosed) return;
//     setTask({ ...task, status: 'Closed' });
//     setOpenCloseTask(false);
//     alert('Task closed');
//   };

//   const getPriorityVariant = (priority) => {
//     switch (priority) {
//       case 'High':
//         return 'destructive';
//       case 'Medium':
//         return 'default';
//       case 'Low':
//         return 'secondary';
//       default:
//         return 'outline';
//     }
//   };

//   return (
//     <TooltipProvider>
//       <div className="p-3 sm:p-4">
//         <Card className="shadow-lg">
//           <CardHeader>
//             <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
//               <div className="flex items-center">
//                 <ClipboardList className="mr-2 h-5 w-5 text-primary" />
//                 {task.title}
//               </div>
//               <Badge variant={isTaskClosed ? 'destructive' : 'default'} className="ml-2 text-xs sm:text-sm">
//                 {task.status}
//               </Badge>
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-3 sm:gap-4 lg:gap-6">
//               {/* Left Column (80% - Task Details and Subtasks) */}
//               <div className="space-y-4">
//                 {/* Task Details Section */}
//                 <section>
//                   <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
//                     <InfoIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
//                     Task Details
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <div className="flex items-center">
//                       <Hash className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
//                       <span className="font-medium text-xs sm:text-sm">{task.id}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Folder className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
//                       <span className="font-medium text-xs sm:text-sm">{task.project}</span>
//                     </div>
//                     <div className="flex items-start sm:col-span-2">
//                       <AlertCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mt-1" />
//                       <span className="font-medium text-xs sm:text-sm">{task.description}</span>
//                     </div>
//                     <div className="flex items-center">
//                       <Flag className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
//                       <Badge variant={getPriorityVariant(task.priority)} className="text-xs sm:text-sm">
//                         {task.priority}
//                       </Badge>
//                     </div>
//                   </div>
//                 </section>

//                 <Separator className="my-3" />

//                 {/* Subtask List Component */}
//                 <SubtaskList
               
//                   isTaskClosed={isTaskClosed}
//                 />
//               </div>

//               {/* Right Column (20% - Owner Details, Actions, History) */}
//               <div className="space-y-4">
//                 <section>
//                   <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
//                     <User className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
//                     Task Management
//                   </h3>
//                   <div className="grid grid-cols-1 gap-3">
//                     {/* Owner Details */}
//                     <div className="space-y-2">
//                       <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Owner Details</h4>
//                       <div className="flex items-center">
//                         <User className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
//                         <span className="font-medium text-xs sm:text-sm">{owner.name}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <AlertCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
//                         <span className="font-medium text-xs sm:text-sm">{owner.role}</span>
//                       </div>
//                       <div className="flex items-center">
//                         <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
//                         <span className="font-medium text-xs sm:text-sm">{owner.email}</span>
//                       </div>
//                     </div>
//                     {/* Actions */}
//                     <div className="space-y-2">
//                       <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Actions</h4>
//                       <div className="flex flex-col gap-2">
//                         <Tooltip>
//                           <TooltipTrigger asChild>
//                             <button
//                               className={`w-full text-xs sm:text-sm h-8 sm:h-9 px-3 rounded-md flex items-center justify-center bg-green-600 text-white hover:bg-green-700 opacity-50 cursor-not-allowed' : ''}`}
//                               onClick={() => setOpenCloseTask(true)}
//                               // disabled={isTaskClosed || !allClosed}
//                             >
//                               <ListTodo className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Mark as Closed
//                             </button>
//                           </TooltipTrigger>
//                           <TooltipContent>
//                             { !isTaskClosed ? 'Close the task' : isTaskClosed ? 'Task is already closed' : 'All subtasks must be closed first'}
//                             {/* {allClosed && !isTaskClosed ? 'Close the task' : isTaskClosed ? 'Task is already closed' : 'All subtasks must be closed first'} */}
//                           </TooltipContent>
//                         </Tooltip>
//                         <ReportBugModal isTaskClosed={isTaskClosed} />
//                       </div>
//                     </div>
//                     {/* Task Review History */}
//                     <div className="space-y-2">
//                       <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Review History</h4>
//                       <ul className="space-y-2 max-h-60 sm:max-h-72 overflow-y-auto">
//                         {history.map((item, index) => (
//                           <li
//                             key={index}
//                             className="p-2 sm:p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
//                           >
//                             <div className="flex items-center">
//                               <History className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
//                               <span className="font-medium text-xs sm:text-sm">{item.date}</span>
//                             </div>
//                             <p className="text-xs sm:text-sm mt-1">{item.message}</p>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

      
//       </div>
//     </TooltipProvider>
//   );
// };

// export default TaskView;



"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
} from 'lucide-react';

import SubtaskList from '@/modules/Tasks/sub-task/SubTaskList';
import CloseTaskModal from '@/modules/Tasks/sub-task/CloseTaskModal';
import ReportBugModal from '@/modules/Tasks/sub-task/ReportBugModal';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { fetchTaskById } from '@/features/taskSlice';

const TaskView = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const task_id = params.id;


  const task = useSelector((state) => state.task.currentTask);
    const loading = useSelector((state) => state.task.status === "loading");
    const error = useSelector((state) => state.task.error);
    const { currentUser, isTeamLead } = useCurrentUser(task?.teamLeadId);
    





    
    
      useEffect(() => {
        if (task_id) {
          dispatch(fetchTaskById(task_id));
        }
      }, [dispatch, task_id]);
console.log("Current Task:",task_id, task);

  // Task data
  // const [task] = useState({
  //   id: 'TASK-123',
  //   title: 'Implement Feature X',
  //   description: 'Develop and integrate the new feature into the main application.',
  //   priority: 'High',
  //   project: 'Project Alpha',
  //   status: 'Open',
  // });

  // Owner data
  const [owner] = useState({
    name: 'John Doe',
    role: 'Developer',
    email: 'john.doe@example.com',
  });

  // Review history
  const [history] = useState([
    { date: '2025-09-01', message: 'Initial review: Approved' },
    { date: '2025-09-05', message: 'Progress update: 30% complete' },
    { date: '2025-09-10', message: 'Bug found and reported' },
  ]);

  const isTaskClosed =  'Closed';
  // const isTaskClosed = task.status === 'Closed';

  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'High':
        return 'destructive';
      case 'Medium':
        return 'default';
      case 'Low':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <TooltipProvider>
      <div className="p-3 sm:p-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
              <div className="flex items-center">
                <ClipboardList className="mr-2 h-5 w-5 text-primary" />
                {task?.task_id}
                
              </div>
              <Badge variant={isTaskClosed ? 'destructive' : 'default'} className="ml-2 text-xs sm:text-sm">
                {task?.status}
                
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-3 sm:gap-4 lg:gap-6">
              {/* Left Column (Task Details & Subtasks) */}
              <div className="space-y-4">
                <section>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
                    <InfoIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                    Task Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <Hash className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="font-medium text-xs sm:text-sm">{task?.title}</span>
                    </div>
                    <div className="flex items-center">
                      <Folder className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="font-medium text-xs sm:text-sm">{task?.projectName}</span>
                    </div>
                    <div className="flex items-start sm:col-span-2">
                      <AlertCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mt-1" />
                      <span className="font-medium text-xs sm:text-sm">{task?.description}</span>
                    </div>
                    <div className="flex items-center">
                      <Flag className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <Badge variant={getPriorityVariant(task?.priority)} className="text-xs sm:text-sm">
                        {task?.priority}
                      </Badge>
                    </div>
                  </div>
                </section>

                <Separator className="my-3" />

                {/* Subtask List */}
                <SubtaskList />
              </div>

              {/* Right Column (Owner, Actions, History) */}
              <div className="space-y-4">
                <section>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
                    <User className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                    Task Management
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {/* Owner Details */}
                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Owner Details</h4>
                      <div className="flex items-center">
                        <User className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="font-medium text-xs sm:text-sm">{task?.assignedToDetails?.memberName}</span>
                      </div>
                      <div className="flex items-center">
                        <AlertCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="font-medium text-xs sm:text-sm">{task?.assignedBy}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="font-medium text-xs sm:text-sm">{task?.assignedToDetails?.memberName}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Actions</h4>
                      <div className="flex flex-col gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button
                              className={`w-full text-xs sm:text-sm h-8 sm:h-9 px-3 rounded-md flex items-center justify-center bg-green-600 text-white hover:bg-green-700 opacity-50 cursor-not-allowed`}
                              onClick={() => {}}
                            >
                              <ListTodo className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Mark as Closed
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>
                            {isTaskClosed ? 'Task is already closed' : 'Close the task'}
                          </TooltipContent>
                        </Tooltip>
                        {/* <ReportBugModal /> */}
                      </div>
                    </div>

                    {/* Review History */}
                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Review History</h4>
                      <ul className="space-y-2 max-h-60 sm:max-h-72 overflow-y-auto">
                        {history.map((item, index) => (
                          <li
                            key={index}
                            className="p-2 sm:p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
                          >
                            <div className="flex items-center">
                              <History className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                              <span className="font-medium text-xs sm:text-sm">{item.date}</span>
                            </div>
                            <p className="text-xs sm:text-sm mt-1">{item.message}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Modals */}
        <CloseTaskModal />
      </div>
    </TooltipProvider>
  );
};

export default TaskView;
