import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  CheckCircle2,
  Edit,
  Eye,
  Plus,
  XCircle,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Lock,
  ListTodo,
} from 'lucide-react';
import CreateSubtaskModal from '@/modules/Tasks/sub-task/CreateSubTaskModal';
import EditSubtaskModal from '@/modules/Tasks/sub-task/EditSubTaskModal';
import DeleteSubtaskModal from '@/modules/Tasks/sub-task/DeleteSubTaskModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const SubtaskList = ({   isTaskClosed }) => {
      // Subtask data
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
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const subtasksPerPage = 5;
  const totalPages = Math.ceil(subtasks.length / subtasksPerPage);
  const indexOfLastSubtask = currentPage * subtasksPerPage;
  const indexOfFirstSubtask = indexOfLastSubtask - subtasksPerPage;
  const currentSubtasks = subtasks.slice(indexOfFirstSubtask, indexOfLastSubtask);

  // Modal states
  const [openView, setOpenView] = useState(true); // Open by default for demo
  const [openEdit, setOpenEdit] = useState(true); // Open by default for demo
  const [openAdd, setOpenAdd] = useState(true); // Open by default for demo
  const [openDelete, setOpenDelete] = useState(true); // Open by default for demo
  const [selectedSubtask, setSelectedSubtask] = useState(null);

  // Calculate progress
  const closedSubtasks = subtasks.filter((st) => st.status === 'Closed').length;
  const progress = subtasks.length > 0 ? (closedSubtasks / subtasks.length) * 100 : 0;

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
    setOpenEdit(true);
  };

  const handleDelete = (subtask) => {
    if (isTaskClosed) return;
    setSelectedSubtask(subtask);
    setOpenDelete(true);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const getStatusVariant = (status) => {
    return status === 'Closed' ? 'success' : 'secondary';
  };

  return (
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

      {/* View Subtask Modal */}
      {selectedSubtask && (
        <Dialog open={openView} onOpenChange={setOpenView}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                View Subtask
              </DialogTitle>
            </DialogHeader>
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
          </DialogContent>
        </Dialog>
      )}

      {/* Create, Edit, Delete Modals */}
      {/* <CreateSubtaskModal
        open={openAdd}
        setOpen={setOpenAdd}
        subtasks={subtasks}
        setSubtasks={setSubtasks}
        isTaskClosed={isTaskClosed}
        setCurrentPage={setCurrentPage}
      /> */}
      {selectedSubtask && (
        <EditSubtaskModal
          open={openEdit}
          setOpen={setOpenEdit}
          subtask={selectedSubtask}
          subtasks={subtasks}
          setSubtasks={setSubtasks}
          isTaskClosed={isTaskClosed}
        />
      )}
      {selectedSubtask && (
        <DeleteSubtaskModal
          open={openDelete}
          setOpen={setOpenDelete}
          subtask={selectedSubtask}
          subtasks={subtasks}
          setSubtasks={setSubtasks}
          isTaskClosed={isTaskClosed}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentSubtasks={currentSubtasks}
        />
      )}
    </section>
  );
};

export default SubtaskList;