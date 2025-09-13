import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Edit } from 'lucide-react';

const EditSubtaskModal = ({ open, setOpen, subtask, subtasks, setSubtasks, isTaskClosed }) => {
  const [editTitle, setEditTitle] = useState(subtask.title);
  const [editStatus, setEditStatus] = useState(subtask.status);

  const handleSaveEdit = () => {
    if (isTaskClosed) return;
    setSubtasks(
      subtasks.map((st) =>
        st.id === subtask.id ? { ...st, title: editTitle, status: editStatus } : st
      )
    );
    setOpen(false);
    alert('Subtask edited');
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
  );
};

export default EditSubtaskModal;