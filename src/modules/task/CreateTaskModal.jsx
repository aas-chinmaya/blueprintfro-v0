



// "use client";

// import { useState, useEffect, useMemo } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createTask } from "@/features/taskSlice";
// import { fetchTeamByProjectId } from "@/features/teamSlice";
// import { FiEdit, FiUser, FiFlag, FiCalendar, FiInfo, FiX, FiLoader } from "react-icons/fi";
// import { toast } from "sonner";
// import Select from "react-select";

// const CreateTaskModal = ({ projectId, project, onClose, isOpen }) => {
//   const dispatch = useDispatch();
//   const { teamsByProject: teams, status } = useSelector((state) => state.team);
//   const taskStatus = useSelector((state) => state.task?.status);

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     assignedTo: "",
//     assignedBy: "",
//     priority: "",
//     deadline: "",
//     projectId: projectId || "",
//     projectName: project?.data?.name || "",
//     teamId: "",
//     memberId: "",
//   });

//   const [selectedTeam, setSelectedTeam] = useState(null);

//   useEffect(() => {
//     if (projectId) {
//       dispatch(fetchTeamByProjectId(projectId));
//     }
//   }, [dispatch, projectId]);

//   useEffect(() => {
//     if (selectedTeam) {
//       setFormData((prev) => ({
//         ...prev,
//         assignedBy: selectedTeam.teamLeadName || "",
//         projectId: selectedTeam.projectId || projectId,
//         projectName: selectedTeam.projectName || project?.data?.name || "",
//         teamId: selectedTeam.teamId || "",
//       }));
//     }
//   }, [selectedTeam, projectId, project]);

//   const teamOptions = useMemo(() => {
//     return teams.map((team) => ({
//       value: team.teamId,
//       label: team.teamName,
//     }));
//   }, [teams]);

//   const teamMemberOptions = useMemo(() => {
//     if (!selectedTeam?.teamMembers || !Array.isArray(selectedTeam.teamMembers)) {
//       return [];
//     }
//     return selectedTeam.teamMembers.map((member) => ({
//       value: member.memberId,
//       label: member.memberName,
//       memberId: member.memberId,
//     }));
//   }, [selectedTeam]);

//   const customSelectStyles = {
//     menu: (provided) => ({
//       ...provided,
//       zIndex: 9999,
//       borderRadius: "0.5rem",
//       boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
//     }),
//     control: (base) => ({
//       ...base,
//       borderColor: "#e5e7eb",
//       paddingLeft: "2.25rem",
//       borderRadius: "0.5rem",
//       backgroundColor: "#ffffff",
//       cursor: "pointer",
//       boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
//       "&:hover": { borderColor: "#2563eb" },
//     }),
//     placeholder: (base) => ({
//       ...base,
//       color: "#9ca3af",
//     }),
//     input: (base) => ({
//       ...base,
//       color: "#1f2937",
//     }),
//     option: (base, state) => ({
//       ...base,
//       color: "#1f2937",
//       backgroundColor: state.isSelected ? "#dbeafe" : "#ffffff",
//       "&:hover": {
//         backgroundColor: "#eff6ff",
//       },
//     }),
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const requiredFields = ["title", "assignedTo", "assignedBy", "projectId", "teamId"];
//     const missingFields = requiredFields.filter((field) => !formData[field]);
//     if (missingFields.length > 0) {
//       toast.error(`Please fill in all required fields: ${missingFields.join(", ")}`);
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       return;
//     }
//     try {
//       const taskData = {
//         ...formData,
//         projectId: selectedTeam.projectId || projectId,
//         projectName: selectedTeam.projectName || project?.data?.name || "N/A",
//         teamId: selectedTeam.teamId,
//         memberId: formData.assignedTo || selectedTeam.teamLeadId,
//       };
//       const result = await dispatch(createTask(taskData)).unwrap();
//       if (result) {
//         toast.success("Task assigned successfully!");
//         onClose();
//       }
//     } catch (err) {
//       toast.error(`Failed to assign task: ${err.message || "Unknown error"}`);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       style={{ zIndex: 70 }}
//       className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
//     >
//       <div className="bg-white rounded-xl sm:rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200">
//           <div className="flex justify-between items-center">
//             <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">
//               Assign Task
//             </h3>
//             <button onClick={onClose}>
//               <FiX className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-gray-700" />
//             </button>
//           </div>
//         </div>
//         <form className="p-4 sm:p-6 space-y-4" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1.5">
//                 Team
//               </label>
//               <div className="relative">
//                 <Select
//                   options={teamOptions}
//                   value={teamOptions.find((option) => option.value === selectedTeam?.teamId)}
//                   onChange={(selected) => {
//                     const team = teams.find((t) => t.teamId === selected.value);
//                     setSelectedTeam(team);
//                     setFormData((prev) => ({
//                       ...prev,
//                       teamId: team.teamId,
//                       assignedTo: "", // Reset assignedTo when team changes
//                     }));
//                   }}
//                   styles={customSelectStyles}
//                   placeholder="Select team"
//                   classNamePrefix="react-select"
//                 />
//                 <FiUser className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1.5">
//                 Task Title
//               </label>
//               <div className="relative">
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="Enter task title"
//                   className="w-full p-2.5 sm:p-3 pl-9 sm:pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm sm:text-base"
//                   required
//                 />
//                 <FiEdit className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1.5">
//                 Assigned To
//               </label>
//               <div className="relative">
//                 <Select
//                   options={teamMemberOptions}
//                   value={teamMemberOptions.find((option) => option.value === formData.assignedTo)}
//                   onChange={(selected) => {
//                     setFormData((prev) => ({
//                       ...prev,
//                       assignedTo: selected.value,
//                       memberId: selected.memberId,
//                     }));
//                   }}
//                   styles={customSelectStyles}
//                   placeholder="Select team member"
//                   classNamePrefix="react-select"
//                   isDisabled={!selectedTeam}
//                 />
//                 <FiUser className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-500 z-10" />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1.5">
//                 Priority
//               </label>
//               <div className="relative">
//                 <select
//                   name="priority"
//                   value={formData.priority}
//                   onChange={handleChange}
//                   className="w-full p-2.5 sm:p-3 pl-9 sm:pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm sm:text-base"
//                 >
//                   <option value="">Select priority</option>
//                   <option value="Low">Low</option>
//                   <option value="Medium">Medium</option>
//                   <option value="High">High</option>
//                 </select>
//                 <FiFlag className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1.5">
//                 Deadline
//               </label>
//               <div className="relative">
//                 <input
//                   type="date"
//                   name="deadline"
//                   value={formData.deadline}
//                   onChange={handleChange}
//                   className="w-full p-2.5 sm:p-3 pl-9 sm:pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm sm:text-base"
//                   min={new Date().toISOString().split("T")[0]}
//                 />
//                 <FiCalendar className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label className="text-sm font-medium text-gray-700 mb-1.5">
//                 Description
//               </label>
//               <div className="relative">
//                 <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Task description"
//                   rows={4}
//                   className="w-full p-2.5 sm:p-3 pl-9 sm:pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm sm:text-base resize-none"
//                 />
//                 <FiInfo className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm sm:text-base"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={taskStatus === "loading"}
//               className="px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base flex items-center"
//             >
//               {taskStatus === "loading" ? (
//                 <>
//                   <FiLoader className="h-4 w-4 sm:h-5 sm:w-5 animate-spin mr-2" />
//                   Assigning...
//                 </>
//               ) : (
//                 "Assign Task"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateTaskModal;










"use client";

import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "@/features/taskSlice";
import { fetchTeamByProjectId } from "@/features/teamSlice";
import { Edit, User, Flag, CalendarIcon, Info, X, Loader } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const CreateTaskModal = ({ projectId, project, onClose, isOpen }) => {
  const dispatch = useDispatch();
  const { teamsByProject: teams, status } = useSelector((state) => state.team);
  const taskStatus = useSelector((state) => state.task?.status);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    assignedBy: "",
    priority: "",
    deadline: "",
    projectId: projectId || "",
    projectName: project?.data?.name || "",
    teamId: "",
    memberId: "",
  });

  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [memberSearchQuery, setMemberSearchQuery] = useState("");
  const [memberOpen, setMemberOpen] = useState(false);

  useEffect(() => {
    if (projectId) {
      dispatch(fetchTeamByProjectId(projectId));
    }
  }, [dispatch, projectId]);

  useEffect(() => {
    if (selectedTeam) {
      setFormData((prev) => ({
        ...prev,
        assignedBy: selectedTeam.teamLeadName || "",
        projectId: selectedTeam.projectId || projectId,
        projectName: selectedTeam.projectName || project?.data?.name || "",
        teamId: selectedTeam.teamId || "",
        assignedTo: "", // Reset assignedTo when team changes
      }));
      setMemberSearchQuery(""); // Reset search query
    }
  }, [selectedTeam, projectId, project]);

  const teamOptions = useMemo(() => {
    return teams.map((team) => ({
      value: team.teamId,
      label: team.teamName,
    }));
  }, [teams]);

  const teamMemberOptions = useMemo(() => {
    if (!selectedTeam?.teamMembers || !Array.isArray(selectedTeam.teamMembers)) {
      return [];
    }
    const query = memberSearchQuery.toLowerCase();
    return selectedTeam.teamMembers
      .filter((member) => member.memberName.toLowerCase().includes(query))
      .map((member) => ({
        value: member.memberId,
        label: member.memberName,
        memberId: member.memberId,
      }));
  }, [selectedTeam, memberSearchQuery]);

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

  const handleMemberSelect = (value) => {
    const member = teamMemberOptions.find((opt) => opt.value === value);
    handleSelectChange("assignedTo", value);
    handleSelectChange("memberId", member?.memberId || "");
    // toast.success(`Selected ${member?.label || "member"}`);
    setMemberOpen(false);
  };

  const validateForm = () => {
    const requiredFields = ["title", "assignedTo", "assignedBy", "projectId", "teamId"];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      toast.error(`Please fill in all required fields: ${missingFields.join(", ")}`);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const taskData = {
        ...formData,
        projectId: selectedTeam.projectId || projectId,
        projectName: selectedTeam.projectName || project?.data?.name || "N/A",
        teamId: selectedTeam.teamId,
        memberId: formData.assignedTo ,
        // memberId: formData.assignedTo || selectedTeam.teamLeadId,
        deadline: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      };
      const result = await dispatch(createTask(taskData)).unwrap();
      if (result) {
        toast.success("Task assigned successfully!");
        onClose();
      }
    } catch (err) {
      toast.error(`Failed to assign task: ${err.message || "Unknown error"}`);
    }
  };

  if (!isOpen) return null;

  return (
  

    <Dialog open={isOpen} onOpenChange={onClose}>
  <DialogContent className="w-full max-w-full h-[100vh] max-h-[100vh] sm:max-w-4xl sm:max-h-[90vh] md:max-w-7xl bg-white shadow-lg border border-gray-200 rounded-lg text-black p-0">
    <DialogHeader className="bg-blue-50 px-4 py-3 sm:px-6 sm:py-4 border-b border-gray-200 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <DialogTitle className="text-lg sm:text-xl font-bold text-gray-800">
          Assign Task
        </DialogTitle>
        <DialogClose asChild>
          <Button variant="ghost" size="icon" className="text-gray-500 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </DialogClose>
      </div>
    </DialogHeader>

    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 p-6 h-[calc(100vh-100px)] overflow-y-auto">
      {/* Left Column (30%) */}
      <div className="space-y-6">
        {/* Task Title */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Edit className="h-4 w-4 text-blue-500 mr-2" />
            Task Title
          </label>
          <Textarea
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            className="w-full bg-white border border-gray-300 rounded-lg text-sm sm:text-base resize-y min-h-20 max-h-40 p-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
            required
          />
        </div>

        {/* Priority */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <Flag className="h-4 w-4 text-blue-500 mr-2" />
            Priority
          </label>
          <Select
            value={formData.priority}
            onValueChange={(value) => handleSelectChange("priority", value)}
          >
            <SelectTrigger className="w-full bg-white border border-gray-300 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-200 focus:border-blue-500">
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-lg border border-gray-200 rounded-lg text-black">
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Deadline */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <CalendarIcon className="h-4 w-4 text-blue-500 mr-2" />
            Deadline
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-between bg-white border border-gray-300 rounded-lg text-sm sm:text-base hover:bg-gray-100 ${
                  !selectedDate && "text-gray-500"
                }`}
              >
                {selectedDate ? format(selectedDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white border border-gray-200 rounded-lg shadow-lg p-0 w-auto">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date);
                  handleSelectChange("deadline", date ? format(date, "yyyy-MM-dd") : "");
                }}
                initialFocus
                className="rounded-lg text-black"
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Team Selection */}
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <User className="h-4 w-4 text-blue-500 mr-2" />
            Team
          </label>
          <Select
            value={selectedTeam?.teamId || ""}
            onValueChange={(value) => {
              const team = teams.find((t) => t.teamId === value);
              setSelectedTeam(team);
              handleSelectChange("teamId", value);
            }}
          >
            <SelectTrigger className="w-full bg-white border border-gray-300 rounded-lg text-sm sm:text-base focus:ring-2 focus:ring-blue-200 focus:border-blue-500">
              <SelectValue placeholder="Select team" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-lg border border-gray-200 rounded-lg text-black max-h-60 overflow-y-auto">
              {teamOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Assigned To */}
        <div className="w-full">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            <User className="h-4 w-4 text-blue-500 mr-2" />
            Assigned To
          </label>
          <Popover open={memberOpen} onOpenChange={setMemberOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-white border border-gray-300 rounded-lg text-sm sm:text-base hover:bg-gray-100"
                disabled={!selectedTeam}
                onClick={() => setMemberOpen(true)}
              >
                {formData.assignedTo
                  ? teamMemberOptions.find((opt) => opt.value === formData.assignedTo)?.label
                  : "Search and select team member"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white border border-gray-200 rounded-lg shadow-lg p-0 w-full max-h-60 overflow-y-auto">
              <Command>
                <CommandInput
                  placeholder="Search team members..."
                  value={memberSearchQuery}
                  onValueChange={setMemberSearchQuery}
                  className="h-10 text-sm p-2"
                />
                <CommandEmpty>No members found.</CommandEmpty>
                <CommandGroup>
                  {teamMemberOptions.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      onSelect={() => handleMemberSelect(option.value)}
                      className={`cursor-pointer text-sm ${
                        formData.assignedTo === option.value ? "bg-blue-100 text-blue-800" : ""
                      }`}
                    >
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Right Column (70%) */}
      <div className="flex flex-col h-full">
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Info className="h-4 w-4 text-blue-500 mr-2" />
          Description
        </label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Task description"
          className="flex-1 bg-white border border-gray-300 rounded-lg text-sm sm:text-base resize-y min-h-40 max-h-[80vh] p-2 focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
        />
      </div>

      {/* Form Actions spanning full width */}
      <div className="md:col-span-2 flex justify-end gap-3 pt-4 border-t border-gray-200">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="bg-white text-black border border-gray-300 hover:bg-gray-100 rounded-lg text-sm sm:text-base"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={taskStatus === "loading"}
          className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-sm sm:text-base flex items-center"
        >
          {taskStatus === "loading" ? (
            <>
              <Loader className="h-4 w-4 animate-spin mr-2" />
              Assigning...
            </>
          ) : (
            "Assign Task"
          )}
        </Button>
      </div>
    </form>
  </DialogContent>
</Dialog>

  );
};

export default CreateTaskModal;

