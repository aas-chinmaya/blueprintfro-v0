"use client";




"use client";

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  CheckCircle2,
  Edit,
  Eye,
  Plus,
  User,
  Mail,
  Flag,
  Folder,
  Hash,
  ListTodo,
  History,
  Bug,
  XCircle,
  Trash2,
  AlertTriangle,
  Lock,
  Info as InfoIcon,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  AlertCircle,
} from 'lucide-react';

const TaskView = () => {
  // Dummy data
  const [task, setTask] = useState({
    id: 'TASK-123',
    title: 'Implement Feature X',
    description: 'Develop and integrate the new feature into the main application.',
    priority: 'High',
    project: 'Project Alpha',
    status: 'Open',
  });

  const [owner] = useState({
    name: 'John Doe',
    role: 'Developer',
    email: 'john.doe@example.com',
  });

  const [subtasks, setSubtasks] = useState([
    { id: 1, title: 'Research requirements', status: 'Closed' },
    { id: 2, title: 'Design UI', status: 'Open' },
    { id: 3, title: 'Implement backend', status: 'Open' },
    { id: 4, title: 'Test integration', status: 'Open' },
    { id: 5, title: 'Deploy to staging', status: 'Open' },
    { id: 6, title: 'Review code', status: 'Closed' },
    { id: 7, title: 'Fix bugs', status: 'Open' },
    { id: 8, title: 'Optimize performance', status: 'Open' },
    { id: 9, title: 'Document changes', status: 'Open' },
    { id: 10, title: 'Final testing', status: 'Open' },
  ]);

  const [history] = useState([
    { date: '2025-09-01', message: 'Initial review: Approved' },
    { date: '2025-09-05', message: 'Progress update: 30% complete' },
    { date: '2025-09-10', message: 'Bug found and reported' },
  ]);

  // Modal states
  const [openView, setOpenView] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedSubtask, setSelectedSubtask] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editStatus, setEditStatus] = useState('Open');

  // Pagination for subtasks
  const [currentPage, setCurrentPage] = useState(1);
  const subtasksPerPage = 5;
  const totalPages = Math.ceil(subtasks.length / subtasksPerPage);
  const indexOfLastSubtask = currentPage * subtasksPerPage;
  const indexOfFirstSubtask = indexOfLastSubtask - subtasksPerPage;
  const currentSubtasks = subtasks.slice(indexOfFirstSubtask, indexOfLastSubtask);

  // Calculate progress
  const closedSubtasks = subtasks.filter((st) => st.status === 'Closed').length;
  const progress = subtasks.length > 0 ? (closedSubtasks / subtasks.length) * 100 : 0;
  const allClosed = closedSubtasks === subtasks.length;
  const isTaskClosed = task.status === 'Closed';

  // Handlers
  const handleToggleStatus = (id) => {
    if (isTaskClosed) return;
    setSubtasks(
      subtasks.map((st) =>
        st.id === id ? { ...st, status: st.status === 'Open' ? 'Closed' : 'Open' } : st
      )
    );
  };

  const handleView = (subtask) => {
    setSelectedSubtask(subtask);
    setOpenView(true);
  };

  const handleEdit = (subtask) => {
    if (isTaskClosed) return;
    setSelectedSubtask(subtask);
    setEditTitle(subtask.title);
    setEditStatus(subtask.status);
    setOpenEdit(true);
  };

  const handleSaveEdit = () => {
    if (isTaskClosed) return;
    setSubtasks(
      subtasks.map((st) =>
        st.id === selectedSubtask.id ? { ...st, title: editTitle, status: editStatus } : st
      )
    );
    setOpenEdit(false);
    alert('Subtask edited');
  };

  const handleAdd = () => {
    if (isTaskClosed || !newTitle.trim()) return;
    setSubtasks([
      ...subtasks,
      { id: subtasks.length + 1, title: newTitle, status: 'Open' },
    ]);
    setNewTitle('');
    setOpenAdd(false);
    alert('Subtask added');
    setCurrentPage(1);
  };

  const handleDelete = (subtask) => {
    if (isTaskClosed) return;
    setSelectedSubtask(subtask);
    setOpenDelete(true);
  };

  const confirmDelete = () => {
    if (isTaskClosed) return;
    setSubtasks(subtasks.filter((st) => st.id !== selectedSubtask.id));
    setOpenDelete(false);
    alert('Subtask deleted');
    if (currentSubtasks.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCloseTask = () => {
    if (isTaskClosed || !allClosed) return;
    setTask({ ...task, status: 'Closed' });
    alert('Task closed');
  };

  const handleReportBug = () => {
    if (isTaskClosed) return;
    alert('Bug reported');
  };

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

  const getStatusVariant = (status) => {
    return status === 'Closed' ? 'success' : 'secondary';
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <TooltipProvider>
      <div className="p-3 sm:p-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
              <div className="flex items-center">
                <ClipboardList className="mr-2 h-5 w-5 text-primary" />
                {task.title}
              </div>
              <Badge variant={isTaskClosed ? 'destructive' : 'default'} className="ml-2 text-xs sm:text-sm">
                {task.status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-3 sm:gap-4 lg:gap-6">
              {/* Left Column (80% - Task Details and Subtasks) */}
              <div className="space-y-4">
                {/* Task Details Section */}
                <section>
                  <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
                    <InfoIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                    Task Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <Hash className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="font-medium text-xs sm:text-sm">{task.id}</span>
                    </div>
                    <div className="flex items-center">
                      <Folder className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <span className="font-medium text-xs sm:text-sm">{task.project}</span>
                    </div>
                    <div className="flex items-start sm:col-span-2">
                      <AlertCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500 mt-1" />
                      <span className="font-medium text-xs sm:text-sm">{task.description}</span>
                    </div>
                    <div className="flex items-center">
                      <Flag className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                      <Badge variant={getPriorityVariant(task.priority)} className="text-xs sm:text-sm">
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                </section>

                <Separator className="my-3" />

                {/* Subtasks Section */}
                <section>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-base sm:text-lg font-semibold flex items-center">
                      <ListTodo className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                      Subtasks
                    </h3>
                    {!isTaskClosed ? (
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm px-2 sm:px-3 h-8 sm:h-9"
                        onClick={() => setOpenAdd(true)}
                        disabled={isTaskClosed}
                      >
                        <Plus className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Add
                      </Button>
                    ) : (
                      <Badge variant="secondary" className="flex items-center text-xs sm:text-sm">
                        <Lock className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Read-Only
                      </Badge>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-xs sm:text-sm">
                        Progress: {progress.toFixed(0)}%
                      </span>
                      <Badge variant={progress === 100 ? 'success' : 'default'} className="text-xs sm:text-sm">
                        {closedSubtasks}/{subtasks.length} Completed
                      </Badge>
                    </div>
                    <Progress value={progress} className="h-2 bg-gray-200" />
                  </div>
                  <ul className="space-y-2">
                    {currentSubtasks.map((st) => (
                      <li
                        key={st.id}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2 sm:p-3 border rounded-lg bg-muted/50 transition-all hover:shadow-md"
                      >
                        <div className="flex-1 flex items-center">
                          <CheckCircle2
                            className={`mr-2 h-3 w-3 sm:h-4 sm:w-4 ${st.status === 'Closed' ? 'text-green-500' : 'text-gray-400'}`}
                          />
                          <span className="font-medium text-xs sm:text-sm">{st.title}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Badge variant={getStatusVariant(st.status)} className="text-xs sm:text-sm">
                            {st.status}
                          </Badge>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => handleView(st)} className="h-7 w-7 sm:h-8 sm:w-8">
                                <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>View</TooltipContent>
                          </Tooltip>
                          {!isTaskClosed && (
                            <>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleToggleStatus(st.id)}
                                    disabled={isTaskClosed}
                                    className="h-7 w-7 sm:h-8 sm:w-8"
                                  >
                                    <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>Toggle Status</TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleEdit(st)}
                                    disabled={isTaskClosed}
                                    className="h-7 w-7 sm:h-8 sm:w-8"
                                  >
                                    <Edit className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>Edit</TooltipContent>
                              </Tooltip>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleDelete(st)}
                                    disabled={isTaskClosed}
                                    className="h-7 w-7 sm:h-8 sm:w-8"
                                  >
                                    <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>Delete</TooltipContent>
                              </Tooltip>
                            </>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="h-8 w-8 sm:h-9 sm:w-9"
                      >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                      <span className="text-xs sm:text-sm font-medium">
                        Page {currentPage} of {totalPages}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="h-8 w-8 sm:h-9 sm:w-9"
                      >
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Button>
                    </div>
                  )}
                </section>
              </div>

              {/* Right Column (20% - Owner Details, Progress, Actions, History) */}
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
                        <span className="font-medium text-xs sm:text-sm">{owner.name}</span>
                      </div>
                      <div className="flex items-center">
                        <AlertCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="font-medium text-xs sm:text-sm">{owner.role}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="font-medium text-xs sm:text-sm">{owner.email}</span>
                      </div>
                    </div>
                    {/* Overall Progress */}
                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Overall Progress</h4>
                      <div className="flex items-center">
                        <ListTodo className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                        <span className="font-medium text-xs sm:text-sm">
                          {progress.toFixed(0)}%
                        </span>
                      </div>
                      <Progress value={progress} className="h-2 bg-gray-200" />
                    </div>
                    {/* Actions */}
                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-700">Actions</h4>
                      <div className="flex flex-col gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="sm"
                              variant="default"
                              disabled={isTaskClosed || !allClosed}
                              onClick={handleCloseTask}
                              className="bg-green-600 hover:bg-green-700 w-full text-xs sm:text-sm h-8 sm:h-9"
                            >
                              <XCircle className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Mark as Closed
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            {allClosed && !isTaskClosed ? 'Close the task' : isTaskClosed ? 'Task is already closed' : 'All subtasks must be closed first'}
                          </TooltipContent>
                        </Tooltip>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleReportBug}
                          disabled={isTaskClosed}
                          className="border-red-500 text-red-500 hover:bg-red-50 w-full text-xs sm:text-sm h-8 sm:h-9"
                        >
                          <Bug className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Report Bug
                        </Button>
                      </div>
                    </div>
                    {/* Task Review History */}
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

        {/* View Subtask Modal */}
        <Dialog open={openView} onOpenChange={setOpenView}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                View Subtask
              </DialogTitle>
            </DialogHeader>
            {selectedSubtask && (
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-xs sm:text-sm">Title:</span>
                  <p className="mt-1 text-xs sm:text-sm">{selectedSubtask.title}</p>
                </div>
                <div>
                  <span className="font-medium text-xs sm:text-sm">Status:</span>
                  <Badge variant={getStatusVariant(selectedSubtask.status)} className="ml-2 text-xs sm:text-sm">
                    {selectedSubtask.status}
                  </Badge>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Edit Subtask Modal */}
        <Dialog open={openEdit} onOpenChange={setOpenEdit}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Edit className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                Edit Subtask
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-xs sm:text-sm">Title:</span>
                <Input
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="mt-1 text-xs sm:text-sm"
                  disabled={isTaskClosed}
                />
              </div>
              <div>
                <span className="font-medium text-xs sm:text-sm">Status:</span>
                <select
                  className="w-full p-2 border rounded bg-background text-foreground mt-1 text-xs sm:text-sm"
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  disabled={isTaskClosed}
                >
                  <option>Open</option>
                  <option>Closed</option>
                </select>
              </div>
              <DialogClose asChild>
                <Button
                  onClick={handleSaveEdit}
                  disabled={isTaskClosed}
                  className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm h-8 sm:h-9"
                >
                  Save Changes
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>

        {/* Add Subtask Modal */}
        <Dialog open={openAdd} onOpenChange={setOpenAdd}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Plus className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                Add New Subtask
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-xs sm:text-sm">Title:</span>
                <Input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="mt-1 text-xs sm:text-sm"
                  disabled={isTaskClosed}
                />
              </div>
              <DialogClose asChild>
                <Button
                  onClick={handleAdd}
                  disabled={isTaskClosed}
                  className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm h-8 sm:h-9"
                >
                  Add Subtask
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>

        {/* Delete Subtask Confirmation Modal */}
        <Dialog open={openDelete} onOpenChange={setOpenDelete}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                Delete Subtask
              </DialogTitle>
            </DialogHeader>
            <p className="text-xs sm:text-sm">Are you sure you want to delete "{selectedSubtask?.title}"?</p>
            <div className="flex justify-end gap-2 mt-3">
              <DialogClose asChild>
                <Button variant="outline" className="text-xs sm:text-sm h-8 sm:h-9">Cancel</Button>
              </DialogClose>
              <Button
                variant="destructive"
                onClick={confirmDelete}
                disabled={isTaskClosed}
                className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm h-8 sm:h-9"
              >
                Delete
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
};

export default TaskView;