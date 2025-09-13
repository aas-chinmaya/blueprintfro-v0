import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';

const CloseTaskModal = ({ open, setOpen, handleCloseTask, isTaskClosed, allClosed }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <XCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
            Close Task
          </DialogTitle>
        </DialogHeader>
        <p className="text-xs sm:text-sm">Are you sure you want to mark this task as closed?</p>
        <div className="flex justify-end gap-2 mt-3">
          <DialogClose asChild>
            <Button variant="outline" className="text-xs sm:text-sm h-8 sm:h-9">Cancel</Button>
          </DialogClose>
          <Button
            onClick={handleCloseTask}
            disabled={isTaskClosed || !allClosed}
            className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm h-8 sm:h-9"
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CloseTaskModal;