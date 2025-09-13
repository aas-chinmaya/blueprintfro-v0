module.exports = {

"[project]/src/app/test/page.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use client"; // import { useState } from 'react';
 // import {
 //   Card,
 //   CardContent,
 //   CardHeader,
 //   CardTitle,
 // } from '@/components/ui/card';
 // import { Button } from '@/components/ui/button';
 // import {
 //   Dialog,
 //   DialogContent,
 //   DialogHeader,
 //   DialogTitle,
 //   DialogClose,
 // } from '@/components/ui/dialog';
 // import { Input } from '@/components/ui/input';
 // import { Progress } from '@/components/ui/progress';
 // import { Badge } from '@/components/ui/badge';
 // import { Separator } from '@/components/ui/separator';
 // import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
 // import {
 //   CheckCircle2,
 //   Edit,
 //   Eye,
 //   Plus,
 //   User,
 //   Mail,
 //   Flag,
 //   Folder,
 //   Hash,
 //   ListTodo,
 //   History,
 //   Bug,
 //   XCircle,
 //   Trash2,
 //   AlertTriangle,
 //   Lock,
 //   Info as InfoIcon,
 //   ChevronLeft,
 //   ChevronRight,
 //   AlertCircle,
 //   ClipboardList,
 // } from 'lucide-react';
 // const TaskView = () => {
 //   // Dummy data
 //   const [task, setTask] = useState({
 //     id: 'TASK-123',
 //     title: 'Implement Feature X',
 //     description: 'Develop and integrate the new feature into the main application.',
 //     priority: 'High',
 //     project: 'Project Alpha',
 //     status: 'Open',
 //   });
 //   const [owner] = useState({
 //     name: 'John Doe',
 //     role: 'Developer',
 //     email: 'john.doe@example.com',
 //   });
 //   const [subtasks, setSubtasks] = useState([
 //     { id: 1, title: 'Research requirements', status: 'Closed' },
 //     { id: 2, title: 'Design UI', status: 'Open' },
 //     { id: 3, title: 'Implement backend', status: 'Open' },
 //     { id: 4, title: 'Test integration', status: 'Open' },
 //     { id: 5, title: 'Deploy to staging', status: 'Open' },
 //     { id: 6, title: 'Review code', status: 'Closed' },
 //     { id: 7, title: 'Fix bugs', status: 'Open' },
 //     { id: 8, title: 'Optimize performance', status: 'Open' },
 //     { id: 9, title: 'Document changes', status: 'Open' },
 //     { id: 10, title: 'Final testing', status: 'Open' },
 //   ]);
 //   const [history] = useState([
 //     { date: '2025-09-01', message: 'Initial review: Approved' },
 //     { date: '2025-09-05', message: 'Progress update: 30% complete' },
 //     { date: '2025-09-10', message: 'Bug found and reported' },
 //   ]);
 //   // Modal states
 //   const [openView, setOpenView] = useState(false);
 //   const [openEdit, setOpenEdit] = useState(false);
 //   const [openAdd, setOpenAdd] = useState(false);
 //   const [openDelete, setOpenDelete] = useState(false);
 //   const [selectedSubtask, setSelectedSubtask] = useState(null);
 //   const [newTitle, setNewTitle] = useState('');
 //   const [editTitle, setEditTitle] = useState('');
 //   const [editStatus, setEditStatus] = useState('Open');
 //   // Pagination for subtasks
 //   const [currentPage, setCurrentPage] = useState(1);
 //   const subtasksPerPage = 5;
 //   const totalPages = Math.ceil(subtasks.length / subtasksPerPage);
 //   const indexOfLastSubtask = currentPage * subtasksPerPage;
 //   const indexOfFirstSubtask = indexOfLastSubtask - subtasksPerPage;
 //   const currentSubtasks = subtasks.slice(indexOfFirstSubtask, indexOfLastSubtask);
 //   // Calculate progress
 //   const closedSubtasks = subtasks.filter((st) => st.status === 'Closed').length;
 //   const progress = subtasks.length > 0 ? (closedSubtasks / subtasks.length) * 100 : 0;
 //   const allClosed = closedSubtasks === subtasks.length;
 //   const isTaskClosed = task.status === 'Closed';
 //   // Handlers
 //   const handleToggleStatus = (id) => {
 //     if (isTaskClosed) return;
 //     setSubtasks(
 //       subtasks.map((st) =>
 //         st.id === id ? { ...st, status: st.status === 'Open' ? 'Closed' : 'Open' } : st
 //       )
 //     );
 //   };
 //   const handleView = (subtask) => {
 //     setSelectedSubtask(subtask);
 //     setOpenView(true);
 //   };
 //   const handleEdit = (subtask) => {
 //     if (isTaskClosed) return;
 //     setSelectedSubtask(subtask);
 //     setEditTitle(subtask.title);
 //     setEditStatus(subtask.status);
 //     setOpenEdit(true);
 //   };
 //   const handleSaveEdit = () => {
 //     if (isTaskClosed) return;
 //     setSubtasks(
 //       subtasks.map((st) =>
 //         st.id === selectedSubtask.id ? { ...st, title: editTitle, status: editStatus } : st
 //       )
 //     );
 //     setOpenEdit(false);
 //     alert('Subtask edited');
 //   };
 //   const handleAdd = () => {
 //     if (isTaskClosed || !newTitle.trim()) return;
 //     setSubtasks([
 //       ...subtasks,
 //       { id: subtasks.length + 1, title: newTitle, status: 'Open' },
 //     ]);
 //     setNewTitle('');
 //     setOpenAdd(false);
 //     alert('Subtask added');
 //     setCurrentPage(1);
 //   };
 //   const handleDelete = (subtask) => {
 //     if (isTaskClosed) return;
 //     setSelectedSubtask(subtask);
 //     setOpenDelete(true);
 //   };
 //   const confirmDelete = () => {
 //     if (isTaskClosed) return;
 //     setSubtasks(subtasks.filter((st) => st.id !== selectedSubtask.id));
 //     setOpenDelete(false);
 //     alert('Subtask deleted');
 //     if (currentSubtasks.length === 1 && currentPage > 1) {
 //       setCurrentPage(currentPage - 1);
 //     }
 //   };
 //   const handleCloseTask = () => {
 //     if (allClosed && !isTaskClosed) {
 //       setTask({ ...task, status: 'Closed' });
 //       alert('Task closed');
 //     }
 //   };
 //   const handleReportBug = () => {
 //     alert('Bug reported');
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
 //   const getStatusVariant = (status) => {
 //     return status === 'Closed' ? 'success' : 'secondary';
 //   };
 //   const handlePrevPage = () => {
 //     if (currentPage > 1) setCurrentPage(currentPage - 1);
 //   };
 //   const handleNextPage = () => {
 //     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
 //   };
 //   return (
 //     <TooltipProvider>
 //       <div className="container mx-auto p-4 sm:p-6 max-w-7xl">
 //         <Card className="shadow-lg">
 //           <CardHeader>
 //             <CardTitle className="flex items-center justify-between text-xl sm:text-2xl">
 //               <div className="flex items-center">
 //                 <ClipboardList className="mr-2 h-6 w-6 text-primary" />
 //                 {task.title}
 //               </div>
 //               <Badge variant={isTaskClosed ? 'destructive' : 'default'} className="ml-2">
 //                 {task.status}
 //               </Badge>
 //             </CardTitle>
 //           </CardHeader>
 //           <CardContent>
 //             <div className="grid grid-cols-1 md:grid-cols-[4fr,1fr] gap-4 sm:gap-6 lg:gap-8">
 //               {/* Left Column (80% - Task Details and Subtasks) */}
 //               <div className="space-y-6">
 //                 {/* Task Details Section */}
 //                 <section>
 //                   <h3 className="text-lg font-semibold mb-3 flex items-center">
 //                     <InfoIcon className="mr-2 h-5 w-5 text-blue-500" />
 //                     Task Details
 //                   </h3>
 //                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 //                     <div className="flex items-center">
 //                       <Hash className="mr-2 h-4 w-4 text-gray-500" />
 //                       <span className="font-medium">{task.id}</span>
 //                     </div>
 //                     <div className="flex items-center">
 //                       <Folder className="mr-2 h-4 w-4 text-gray-500" />
 //                       <span className="font-medium">{task.project}</span>
 //                     </div>
 //                     <div className="flex items-start sm:col-span-2">
 //                       <AlertCircle className="mr-2 h-4 w-4 text-gray-500 mt-1" />
 //                       <span className="font-medium">{task.description}</span>
 //                     </div>
 //                     <div className="flex items-center">
 //                       <Flag className="mr-2 h-4 w-4 text-gray-500" />
 //                       <Badge variant={getPriorityVariant(task.priority)}>{task.priority}</Badge>
 //                     </div>
 //                   </div>
 //                 </section>
 //                 <Separator className="my-4" />
 //                 {/* Subtasks Section */}
 //                 <section>
 //                   <div className="flex justify-between items-center mb-3">
 //                     <h3 className="text-lg font-semibold flex items-center">
 //                       <ListTodo className="mr-2 h-5 w-5 text-green-500" />
 //                       Subtasks
 //                     </h3>
 //                     {!isTaskClosed ? (
 //                       <Button
 //                         className="bg-blue-600 hover:bg-blue-700 text-sm px-3 py-1 h-8"
 //                         onClick={() => setOpenAdd(true)}
 //                       >
 //                         <Plus className="mr-1 h-4 w-4" /> Add
 //                       </Button>
 //                     ) : (
 //                       <Badge variant="secondary" className="flex items-center text-sm">
 //                         <Lock className="mr-1 h-4 w-4" /> Read-Only
 //                       </Badge>
 //                     )}
 //                   </div>
 //                   <div className="mb-4">
 //                     <div className="flex justify-between items-center mb-2">
 //                       <span className="font-medium text-sm sm:text-base">
 //                         Progress: {progress.toFixed(0)}%
 //                       </span>
 //                       <Badge variant={progress === 100 ? 'success' : 'default'}>
 //                         {closedSubtasks}/{subtasks.length} Completed
 //                       </Badge>
 //                     </div>
 //                     <Progress value={progress} className="h-2 bg-gray-200" />
 //                   </div>
 //                   <ul className="space-y-3">
 //                     {currentSubtasks.map((st) => (
 //                       <li
 //                         key={st.id}
 //                         className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
 //                       >
 //                         <div className="flex-1 flex items-center">
 //                           <CheckCircle2
 //                             className={`mr-2 h-4 w-4 ${st.status === 'Closed' ? 'text-green-500' : 'text-gray-400'}`}
 //                           />
 //                           <span className="font-medium text-sm sm:text-base">{st.title}</span>
 //                         </div>
 //                         <div className="flex items-center gap-1 sm:gap-2">
 //                           <Badge variant={getStatusVariant(st.status)}>{st.status}</Badge>
 //                           <Tooltip>
 //                             <TooltipTrigger asChild>
 //                               <Button variant="ghost" size="icon" onClick={() => handleView(st)}>
 //                                 <Eye className="h-4 w-4 text-blue-500" />
 //                               </Button>
 //                             </TooltipTrigger>
 //                             <TooltipContent>View</TooltipContent>
 //                           </Tooltip>
 //                           {!isTaskClosed && (
 //                             <>
 //                               <Tooltip>
 //                                 <TooltipTrigger asChild>
 //                                   <Button
 //                                     variant="ghost"
 //                                     size="icon"
 //                                     onClick={() => handleToggleStatus(st.id)}
 //                                   >
 //                                     <XCircle className="h-4 w-4 text-gray-500" />
 //                                   </Button>
 //                                 </TooltipTrigger>
 //                                 <TooltipContent>Toggle Status</TooltipContent>
 //                               </Tooltip>
 //                               <Tooltip>
 //                                 <TooltipTrigger asChild>
 //                                   <Button variant="ghost" size="icon" onClick={() => handleEdit(st)}>
 //                                     <Edit className="h-4 w-4 text-yellow-500" />
 //                                   </Button>
 //                                 </TooltipTrigger>
 //                                 <TooltipContent>Edit</TooltipContent>
 //                               </Tooltip>
 //                               <Tooltip>
 //                                 <TooltipTrigger asChild>
 //                                   <Button variant="ghost" size="icon" onClick={() => handleDelete(st)}>
 //                                     <Trash2 className="h-4 w-4 text-red-500" />
 //                                   </Button>
 //                                 </TooltipTrigger>
 //                                 <TooltipContent>Delete</TooltipContent>
 //                               </Tooltip>
 //                             </>
 //                           )}
 //                         </div>
 //                       </li>
 //                     ))}
 //                   </ul>
 //                   {totalPages > 1 && (
 //                     <div className="flex justify-center items-center gap-4 mt-4">
 //                       <Button
 //                         variant="ghost"
 //                         size="icon"
 //                         onClick={handlePrevPage}
 //                         disabled={currentPage === 1}
 //                         className="h-8 w-8"
 //                       >
 //                         <ChevronLeft className="h-4 w-4" />
 //                       </Button>
 //                       <span className="text-sm font-medium">
 //                         Page {currentPage} of {totalPages}
 //                       </span>
 //                       <Button
 //                         variant="ghost"
 //                         size="icon"
 //                         onClick={handleNextPage}
 //                         disabled={currentPage === totalPages}
 //                         className="h-8 w-8"
 //                       >
 //                         <ChevronRight className="h-4 w-4" />
 //                       </Button>
 //                     </div>
 //                   )}
 //                 </section>
 //               </div>
 //               {/* Right Column (20% - Owner Details, Actions, History) */}
 //               <div className="space-y-6">
 //                 {/* Owner Details & Actions Section */}
 //                 <section>
 //                   <h3 className="text-lg font-semibold mb-3 flex items-center">
 //                     <User className="mr-2 h-5 w-5 text-purple-500" />
 //                     Owner & Actions
 //                   </h3>
 //                   <div className="grid grid-cols-1 gap-3">
 //                     <div className="flex items-center">
 //                       <User className="mr-2 h-4 w-4 text-gray-500" />
 //                       <span className="font-medium text-sm sm:text-base">{owner.name}</span>
 //                     </div>
 //                     <div className="flex items-center">
 //                       <AlertCircle className="mr-2 h-4 w-4 text-gray-500" />
 //                       <span className="font-medium text-sm sm:text-base">{owner.role}</span>
 //                     </div>
 //                     <div className="flex items-center">
 //                       <Mail className="mr-2 h-4 w-4 text-gray-500" />
 //                       <span className="font-medium text-sm sm:text-base">{owner.email}</span>
 //                     </div>
 //                     <div className="space-y-2">
 //                       <div className="flex items-center">
 //                         <ListTodo className="mr-2 h-4 w-4 text-gray-500" />
 //                         <span className="font-medium text-sm sm:text-base">
 //                           Progress: {progress.toFixed(0)}%
 //                         </span>
 //                       </div>
 //                       <Progress value={progress} className="h-2 bg-gray-200" />
 //                     </div>
 //                     <div className="flex flex-col gap-2">
 //                       <Tooltip>
 //                         <TooltipTrigger asChild>
 //                           <Button
 //                             size="sm"
 //                             variant="default"
 //                             disabled={!allClosed || isTaskClosed}
 //                             onClick={handleCloseTask}
 //                             className="bg-green-600 hover:bg-green-700 w-full text-sm h-8"
 //                           >
 //                             <XCircle className="mr-1 h-4 w-4" /> Mark as Closed
 //                           </Button>
 //                         </TooltipTrigger>
 //                         <TooltipContent>
 //                           {allClosed ? 'Close the task' : 'All subtasks must be closed first'}
 //                         </TooltipContent>
 //                       </Tooltip>
 //                       <Button
 //                         size="sm"
 //                         variant="outline"
 //                         onClick={handleReportBug}
 //                         className="border-red-500 text-red-500 hover:bg-red-50 w-full text-sm h-8"
 //                       >
 //                         <Bug className="mr-1 h-4 w-4" /> Report Bug
 //                       </Button>
 //                     </div>
 //                   </div>
 //                 </section>
 //                 <Separator className="my-4" />
 //                 {/* Task Review History Section */}
 //                 <section>
 //                   <h3 className="text-lg font-semibold mb-3 flex items-center">
 //                     <History className="mr-2 h-5 w-5 text-red-500" />
 //                     Review History
 //                   </h3>
 //                   <ul className="space-y-3 max-h-80 sm:max-h-96 overflow-y-auto">
 //                     {history.map((item, index) => (
 //                       <li
 //                         key={index}
 //                         className="p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
 //                       >
 //                         <div className="flex items-center">
 //                           <History className="mr-2 h-4 w-4 text-gray-500" />
 //                           <span className="font-medium text-sm sm:text-base">{item.date}</span>
 //                         </div>
 //                         <p className="text-sm mt-1">{item.message}</p>
 //                       </li>
 //                     ))}
 //                   </ul>
 //                 </section>
 //               </div>
 //             </div>
 //           </CardContent>
 //         </Card>
 //         {/* View Subtask Modal */}
 //         <Dialog open={openView} onOpenChange={setOpenView}>
 //           <DialogContent>
 //             <DialogHeader>
 //               <DialogTitle className="flex items-center">
 //                 <Eye className="mr-2 h-5 w-5 text-blue-500" />
 //                 View Subtask
 //               </DialogTitle>
 //             </DialogHeader>
 //             {selectedSubtask && (
 //               <div className="space-y-4">
 //                 <div>
 //                   <span className="font-medium">Title:</span>
 //                   <p className="mt-1 text-sm sm:text-base">{selectedSubtask.title}</p>
 //                 </div>
 //                 <div>
 //                   <span className="font-medium">Status:</span>
 //                   <Badge variant={getStatusVariant(selectedSubtask.status)} className="ml-2">
 //                     {selectedSubtask.status}
 //                   </Badge>
 //                 </div>
 //               </div>
 //             )}
 //           </DialogContent>
 //         </Dialog>
 //         <Dialog open={openEdit} onOpenChange={setOpenEdit}>
 //           <DialogContent>
 //             <DialogHeader>
 //               <DialogTitle className="flex items-center">
 //                 <Edit className="mr-2 h-5 w-5 text-yellow-500" />
 //                 Edit Subtask
 //               </DialogTitle>
 //             </DialogHeader>
 //             <div className="space-y-4">
 //               <div>
 //                 <span className="font-medium">Title:</span>
 //                 <Input
 //                   value={editTitle}
 //                   onChange={(e) => setEditTitle(e.target.value)}
 //                   className="mt-1"
 //                   disabled={isTaskClosed}
 //                 />
 //               </div>
 //               <div>
 //                 <span className="font-medium">Status:</span>
 //                 <select
 //                   className="w-full p-2 border rounded bg-background text-foreground mt-1 text-sm sm:text-base"
 //                   value={editStatus}
 //                   onChange={(e) => setEditStatus(e.target.value)}
 //                   disabled={isTaskClosed}
 //                 >
 //                   <option>Open</option>
 //                   <option>Closed</option>
 //                 </select>
 //               </div>
 //               <DialogClose asChild>
 //                 <Button
 //                   onClick={handleSaveEdit}
 //                   disabled={isTaskClosed}
 //                   className="bg-blue-600 hover:bg-blue-700 text-sm h-8"
 //                 >
 //                   Save Changes
 //                 </Button>
 //               </DialogClose>
 //             </div>
 //           </DialogContent>
 //         </Dialog>
 //         <Dialog open={openAdd} onOpenChange={setOpenAdd}>
 //           <DialogContent>
 //             <DialogHeader>
 //               <DialogTitle className="flex items-center">
 //                 <Plus className="mr-2 h-5 w-5 text-green-500" />
 //                 Add New Subtask
 //               </DialogTitle>
 //             </DialogHeader>
 //             <div className="space-y-4">
 //               <div>
 //                 <span className="font-medium">Title:</span>
 //                 <Input
 //                   value={newTitle}
 //                   onChange={(e) => setNewTitle(e.target.value)}
 //                   className="mt-1"
 //                   disabled={isTaskClosed}
 //                 />
 //               </div>
 //               <DialogClose asChild>
 //                 <Button
 //                   onClick={handleAdd}
 //                   disabled={isTaskClosed}
 //                   className="bg-blue-600 hover:bg-blue-700 text-sm h-8"
 //                 >
 //                   Add Subtask
 //                 </Button>
 //               </DialogClose>
 //             </div>
 //           </DialogContent>
 //         </Dialog>
 //         <Dialog open={openDelete} onOpenChange={setOpenDelete}>
 //           <DialogContent>
 //             <DialogHeader>
 //               <DialogTitle className="flex items-center">
 //                 <AlertTriangle className="mr-2 h-5 w-5 text-red-500" />
 //                 Delete Subtask
 //               </DialogTitle>
 //             </DialogHeader>
 //             <p className="text-sm sm:text-base">Are you sure you want to delete {selectedSubtask?.title}?</p>
 //             <div className="flex justify-end gap-2 mt-4">
 //               <DialogClose asChild>
 //                 <Button variant="outline" className="text-sm h-8">Cancel</Button>
 //               </DialogClose>
 //               <Button
 //                 variant="destructive"
 //                 onClick={confirmDelete}
 //                 disabled={isTaskClosed}
 //                 className="bg-red-600 hover:bg-red-700 text-sm h-8"
 //               >
 //                 Delete
 //               </Button>
 //             </div>
 //           </DialogContent>
 //         </Dialog>
 //       </div>
 //     </TooltipProvider>
 //   );
 // };
 // export default TaskView;
}}),

};

//# sourceMappingURL=src_app_test_page_b80a670c.js.map