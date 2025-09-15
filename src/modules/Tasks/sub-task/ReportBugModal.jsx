import { useState } from 'react';
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
import { Bug } from 'lucide-react';

const ReportBugModal = ({ onClose }) => {
  const isTaskClosed = false; // You can pass this as a prop if needed
  const [open, setOpen] = useState(true); // Open by default
  const [bugTitle, setBugTitle] = useState('');
  const [bugDescription, setBugDescription] = useState('');

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleReportBug = () => {
    if (isTaskClosed || !bugTitle.trim() || !bugDescription.trim()) return;

    // Handle bug submission logic here
    alert(`Bug reported: ${bugTitle} - ${bugDescription}`);

    setBugTitle('');
    setBugDescription('');
    handleClose();
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
          <div>
            <label className="font-medium text-xs sm:text-sm">
              Bug Title:
            </label>
            <Input
              value={bugTitle}
              onChange={(e) => setBugTitle(e.target.value)}
              className="mt-1 text-xs sm:text-sm"
              disabled={isTaskClosed}
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
              disabled={isTaskClosed}
              placeholder="Describe the bug"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              onClick={handleReportBug}
              disabled={isTaskClosed || !bugTitle.trim() || !bugDescription.trim()}
              className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm h-8 sm:h-9"
            >
              Submit Bug Report
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportBugModal;
