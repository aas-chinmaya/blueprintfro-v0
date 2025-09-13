import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';

const CreateSubtaskModal = ({ open, setOpen, subtasks, setSubtasks, setCurrentPage }) => {
 const isTaskClosed = false;
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    if (isTaskClosed || !newTitle.trim()) return;
    setSubtasks([
      ...subtasks,
      { id: subtasks.length + 1, title: newTitle, status: 'Open' },
    ]);
    setNewTitle('');
    setOpen(false);
    alert('Subtask added');
    setCurrentPage(1);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
  );
};

export default CreateSubtaskModal;