import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const DeleteSubtaskModal = ({ open, setOpen, subtask, subtasks, setSubtasks, isTaskClosed, currentPage, setCurrentPage, currentSubtasks }) => {
  const confirmDelete = () => {
    if (isTaskClosed) return;
    setSubtasks(subtasks.filter((st) => st.id !== subtask.id));
    setOpen(false);
    alert('Subtask deleted');
    if (currentSubtasks.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
            Delete Subtask
          </DialogTitle>
        </DialogHeader>
        <p className="text-xs sm:text-sm">Are you sure you want to delete "{subtask?.title}"?</p>
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
  );
};

export default DeleteSubtaskModal;