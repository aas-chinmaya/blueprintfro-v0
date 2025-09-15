

'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import { createSubTask } from '@/features/subTaskSlice';
import { toast } from 'sonner';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const CreateSubtaskModal = ({ open, setOpen, taskId }) => {
  const { currentUser } = useCurrentUser();

  // Initial state
  const initialFormData = {
    title: '',
    priority: 'Medium',
    deadline: '',
    description: '',
    assignedTo: currentUser?.id || '',
    assignedBy: currentUser?.id || '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { loading: subTaskLoading, error: subTaskError } = useSelector((state) => state.subTask);

  // Reset form whenever modal is opened or closed
  useEffect(() => {
    if (open) {
      setFormData(initialFormData);
      setErrors({});
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const handlePriorityChange = (value) => {
    setFormData((prev) => ({ ...prev, priority: value }));
    setErrors((prev) => ({ ...prev, priority: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.priority.trim()) newErrors.priority = 'Priority is required';
    if (!formData.deadline.trim()) newErrors.deadline = 'Deadline is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdd = async () => {
    if (!validate()) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const subTaskData = {
        title: formData.title,
        priority: formData.priority,
        deadline: formData.deadline,
        description: formData.description,
        assignedTo: formData.assignedTo,
      };

      await dispatch(createSubTask({ taskId, subTaskData })).unwrap();
      toast.success('Subtask added successfully');
      setOpen(false);
    } catch (err) {
      toast.error(subTaskError || 'Failed to add subtask');
    }
  };

  // Enable button only if all required fields are filled
  const isButtonEnabled =
    formData.title.trim() &&
    formData.priority.trim() &&
    formData.deadline.trim() &&
    formData.description.trim();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Plus className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
            Add New Subtask
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="font-medium text-xs sm:text-sm">Title*:</label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 text-xs sm:text-sm"
              placeholder="Enter subtask title"
            />
            {errors.title && <p className="text-red-500 text-xs sm:text-sm">{errors.title}</p>}
          </div>

          {/* Priority */}
          <div>
            <label className="font-medium text-xs sm:text-sm">Priority*:</label>
            <Select value={formData.priority} onValueChange={handlePriorityChange}>
              <SelectTrigger className="mt-1 text-xs sm:text-sm">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
            {errors.priority && <p className="text-red-500 text-xs sm:text-sm">{errors.priority}</p>}
          </div>

          {/* Deadline */}
          <div>
            <label className="font-medium text-xs sm:text-sm">Deadline*:</label>
            <Input
              name="deadline"
              type="date"
              value={formData.deadline}
              onChange={handleChange}
              className="mt-1 text-xs sm:text-sm"
            />
            {errors.deadline && <p className="text-red-500 text-xs sm:text-sm">{errors.deadline}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="font-medium text-xs sm:text-sm">Description*:</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 text-xs sm:text-sm"
              placeholder="Enter subtask description"
              rows={4}
            />
            {errors.description && <p className="text-red-500 text-xs sm:text-sm">{errors.description}</p>}
          </div>

          {/* Assigned To */}
          <div>
            <label className="font-medium text-xs sm:text-sm">Assigned To*:</label>
            <Input
              name="assignedTo"
              value={currentUser?.name || formData.assignedTo}
              className="mt-1 text-xs sm:text-sm"
              disabled
            />
          </div>

          {/* Assigned By */}
          <div>
            <label className="font-medium text-xs sm:text-sm">Assigned By*:</label>
            <Input
              name="assignedBy"
              value={currentUser?.name || formData.assignedBy}
              className="mt-1 text-xs sm:text-sm"
              disabled
            />
          </div>

          {subTaskError && <p className="text-red-500 text-xs sm:text-sm">{subTaskError}</p>}

          {/* Add Button */}
          <DialogClose asChild>
            <Button
              onClick={handleAdd}
              disabled={!isButtonEnabled}
              className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm h-8 sm:h-9 disabled:opacity-50"
            >
              {subTaskLoading ? 'Adding...' : 'Add Subtask'}
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSubtaskModal;
