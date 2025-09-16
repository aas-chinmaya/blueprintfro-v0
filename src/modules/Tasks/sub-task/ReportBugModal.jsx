
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bug } from 'lucide-react';
import { createBug } from '@/features/bugSlice'; // Adjust the import path to where `createBug` is defined
import { toast } from "sonner";

const ReportBugModal = ({ onClose, task_id }) => {
  const dispatch = useDispatch();
  const isTaskClosed = false; // You can pass this as a prop if needed
  const [open, setOpen] = useState(true);
  const [bugTitle, setBugTitle] = useState('');
  const [bugDescription, setBugDescription] = useState('');
  const [priority, setPriority] = useState('Low'); // Default to 'medium'
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleReportBug = async () => {
    if (isTaskClosed || !bugTitle.trim() || !bugDescription.trim() || !priority || !deadline) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    const bugData = {
      title: bugTitle,
      description: bugDescription,
      task_id,
      priority,
      deadline,
    };

    try {
      const result = await dispatch(createBug(bugData)).unwrap();
      toast.success('Bug reported successfully!');
      setBugTitle('');
      setBugDescription('');
      setPriority('Medium');
      setDeadline('');
      handleClose();
    } catch (err) {
      setError(err || 'Failed to create bug. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(openState) => {
      setOpen(openState);
      if (!openState) {
        onClose();
      }
    }}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center">
              <Bug className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
              Report Bug
            </DialogTitle>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          {error && (
            <div className="text-red-500 text-xs sm:text-sm">{error}</div>
          )}
          <div>
            <label className="font-medium text-xs sm:text-sm">
              Bug Title:
            </label>
            <Input
              value={bugTitle}
              onChange={(e) => setBugTitle(e.target.value)}
              className="mt-1 text-xs sm:text-sm"
              disabled={isTaskClosed || isSubmitting}
              placeholder="Enter bug title"
            />
          </div>
          <div>
            <label className="font-medium text-xs sm:text-sm">
              Description:
            </label>
            <Textarea
              value={bugDescription}
              onChange={(e) => setBugDescription(e.target.value)}
              className="mt-1 text-xs sm:text-sm"
              disabled={isTaskClosed || isSubmitting}
              placeholder="Describe the bug"
            />
          </div>
          <div>
            <label className="font-medium text-xs sm:text-sm">
              Priority:
            </label>
            <Select
              value={priority}
              onValueChange={setPriority}
              disabled={isTaskClosed || isSubmitting}
            >
              <SelectTrigger className="mt-1 text-xs sm:text-sm">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="font-medium text-xs sm:text-sm">
              Deadline:
            </label>
            <Input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="mt-1 text-xs sm:text-sm"
              disabled={isTaskClosed || isSubmitting}
              placeholder="Select deadline"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleClose} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button
              onClick={handleReportBug}
              disabled={isTaskClosed || !bugTitle.trim() || !bugDescription.trim() || !priority || !deadline || isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm h-8 sm:h-9"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Bug Report'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportBugModal;