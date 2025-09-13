
'use client';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouter } from 'next/navigation';
import { fetchTaskById, updateTask } from '@/features/taskSlice';
import { ArrowLeft, FileText, User, Flag, Calendar, CheckCircle, Edit } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EditTask = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();
  const task_id = params.id;
  const task = useSelector((state) => state.task.currentTask);
  const loading = useSelector((state) => state.task.status === 'loading');
  const error = useSelector((state) => state.task.error);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    assignedTo: '',
    assignedBy: '',
    priority: 'Low',
    deadline: '',
    status: 'Pending',
  });

  useEffect(() => {
    if (task_id) {
      dispatch(fetchTaskById(task_id));
    }
  }, [dispatch, task_id]);

  useEffect(() => {
    if (task) {
      const formattedDeadline = task.deadline
        ? new Date(task.deadline).toISOString().slice(0, 10) // UTC format: YYYY-MM-DD
        : '';
      setFormData({
        title: task.title || '',
        description: task.description || '',
        assignedTo: task.assignedTo || '',
        assignedBy: task.assignedBy || '',
        priority: task.priority || 'Low',
        deadline: formattedDeadline,
        status: task.status || 'Pending',
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!task_id) {
        toast.info('No task ID found');
        return;
      }

      const updatedTask = {
        ...formData,
        task_id: task_id,
        deadline: formData.deadline ? new Date(formData.deadline).toISOString().slice(0, 10) : '', // Ensure UTC date
      };

      await dispatch(updateTask(updatedTask)).unwrap();
      toast.success('Task updated successfully');
      router.back();
    } catch (error) {
      toast.error('Error while updating task');
    }
  };





  return (
    <div className="min-h-screen ">
      <div className=" mx-auto ">
        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow min-h-screen">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.back()}
                  className="hover:bg-primary/10 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Back </span>
                </Button>
                <CardTitle className="text-2xl font-bold  ">
              Edit Task
                </CardTitle>
              </div>
           
            </div>
         
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="flex items-center gap-2 text-primary">
                    <FileText className="h-4 w-4" /> Task Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border-gray-200 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assignedTo" className="flex items-center gap-2 text-primary">
                    <User className="h-4 w-4" /> Assigned To
                  </Label>
                  <Input
                    id="assignedTo"
                    name="assignedTo"
                    value={formData.assignedTo}
                    onChange={handleChange}
                    className="border-gray-200 focus:ring-primary"
                    required
                    readOnly
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="assignedBy" className="flex items-center gap-2 text-primary">
                    <User className="h-4 w-4" /> Assigned By
                  </Label>
                  <Input
                    id="assignedBy"
                    name="assignedBy"
                    value={formData.assignedBy}
                    onChange={handleChange}
                    className="border-gray-200 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority" className="flex items-center gap-2 text-primary">
                    <Flag className="h-4 w-4" /> Priority
                  </Label>
                  <Select
                    name="priority"
                    value={formData.priority}
                    onValueChange={(value) => handleSelectChange('priority', value)}
                  >
                    <SelectTrigger className="border-gray-200 focus:ring-primary">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="description" className="flex items-center gap-2 text-primary">
                    <FileText className="h-4 w-4" /> Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    className="border-gray-200 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline" className="flex items-center gap-2 text-primary">
                    <Calendar className="h-4 w-4" /> Deadline
                  </Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                    className="border-gray-200 focus:ring-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status" className="flex items-center gap-2 text-primary">
                    <CheckCircle className="h-4 w-4" /> Status
                  </Label>
                  <Select
                    name="status"
                    value={formData.status}
                    onValueChange={(value) => handleSelectChange('status', value)}
                  >
                    <SelectTrigger className="border-gray-200 focus:ring-primary">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                  className="hover:bg-gray-100"
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Update Task
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditTask;