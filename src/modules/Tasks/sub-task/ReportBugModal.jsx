import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Bug } from 'lucide-react';

const ReportBugModal = () => {
  const isTaskClosed = false;
  const [open, setOpen] = useState(true); // Open by default for demo
  const [bugTitle, setBugTitle] = useState('');
  const [bugDescription, setBugDescription] = useState('');

  const handleReportBug = () => {
    if (isTaskClosed || !bugTitle.trim() || !bugDescription.trim()) return;
    alert(`Bug reported: ${bugTitle} - ${bugDescription}`);
    setBugTitle('');
    setBugDescription('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Bug className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
            Report Bug
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div>
            <span className="font-medium text-xs sm:text-sm">Bug Title:</span>
            <Input
              value={bugTitle}
              onChange={(e) => setBugTitle(e.target.value)}
              className="mt-1 text-xs sm:text-sm"
              disabled={isTaskClosed}
              placeholder="Enter bug title"
            />
          </div>
          <div>
            <span className="font-medium text-xs sm:text-sm">Description:</span>
            <Textarea
              value={bugDescription}
              onChange={(e) => setBugDescription(e.target.value)}
              className="mt-1 text-xs sm:text-sm"
              disabled={isTaskClosed}
              placeholder="Describe the bug"
            />
          </div>
          <DialogClose asChild>
            <Button
              onClick={handleReportBug}
              disabled={isTaskClosed || !bugTitle.trim() || !bugDescription.trim()}
              className="bg-red-600 hover:bg-red-700 text-xs sm:text-sm h-8 sm:h-9"
            >
              Submit Bug Report
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportBugModal;