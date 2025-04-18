"use client"
import { useForm } from "react-hook-form"
import LogoutButton from "../../logout/page"
import RealTimeEditor from "@/components/RealTimeEditor"

const AdminPage = () => {
  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      content: "",
      technologies: "",
      githublink: "",
      livelink: "",
      status: "",
      uploadYear: "",
      preview: "",
    },
  })

  return (
    <div className="min-h-screen bg-black px-6 py-12">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-white text-2xl font-semibold">Admin Panel – Upload Project Blog</h1>
        <div className="absolute right-0">
            <LogoutButton />
        </div>
        
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto bg-[#121212] p-8 rounded-lg shadow-md border border-white/10">
        {/* Title */}
        <div className="flex flex-col">
        <span className="text-white/70 font-sans text-[14px] my-1">Project Title:</span>
          <input
            {...register("title", { required: true })}
            className="px-3 w-[500px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            placeholder="Enter your project title..."
          />
        </div>

        {/* Slug */}
        <div className="flex flex-col">
        <span className="text-white/70 font-sans text-[14px] my-1">Slug:</span>
          <input
            {...register("slug", { required: true })}
            className="px-3 w-[500px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            placeholder="your-slug"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col md:col-span-2">
        <span className="text-white/70 font-sans text-[14px] my-1">Short Description:</span>
          <input
            {...register("description", { required: true })}
            className="px-3 w-full text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            placeholder="One-liner to display on cards"
          />
        </div>

        {/* Editor */}
        <div className="md:col-span-2">
          <RealTimeEditor
            label="Content:"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col">
        <span className="text-white/70 font-sans text-[14px] my-1">Technology Used:</span>
          <input
            {...register("technologies", { required: true })}
            className="px-3 w-[500px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            placeholder="Tech stack separated by comma"
          />
        </div>

        {/* GitHub Link */}
        <div className="flex flex-col">
        <span className="text-white/70 font-sans text-[14px] my-1">GitHub Link:</span>
          <input
            {...register("githublink", { required: true })}
            className="px-3 w-[500px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            placeholder="GitHub repo link"
          />
        </div>

        {/* Live Link */}
        <div className="flex flex-col">
        <span className="text-white/70 font-sans text-[14px] my-1">Live Site Link:</span>
          <input
            {...register("livelink")}
            className="px-3 w-[500px] text-[14px] bg-[#171616] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500"
            placeholder="Deployed live site"
          />
        </div>

        {/* Thumbnail Upload */}
        <div className="flex flex-col">
        <span className="text-white/70 font-sans text-[14px] my-1">Project Thumbnail:</span>
          <input type="file" {...register("preview")} className="text-white text-sm" />
        </div>

        {/* More Images Placeholder */}
        <div className="md:col-span-2">
        <span className="text-white/70 font-sans text-[14px] my-1">More Project Images:</span>
          <div className="h-32 w-32 bg-neutral-900 border border-dashed border-sky-400 rounded-xl flex items-center justify-center">
            <svg className="h-6 w-6 text-white/60" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2M7 9l5 -5l5 5M12 4l0 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Status of project */}
        <div className="md:col-span-2">
        <span className="text-white/70 font-sans text-[14px] my-1">Status:</span>
            <div className="flex flex-col space-y-4 p-5">
            <label className="relative flex items-center cursor-pointer">
                <input className="sr-only peer" name="futuristic-radio" type="radio" />
                <div
                className="w-6 h-6 bg-transparent border-2 border-white rounded-full peer-checked:bg-white peer-checked:border-white peer-hover:shadow-lg peer-hover:shadow-white peer-checked:shadow-lg peer-checked:shadow-white transition duration-300 ease-in-out"
                ></div>
                <span className="ml-2 text-white">Active</span>
            </label>
            <label className="relative flex items-center cursor-pointer">
                <input className="sr-only peer" name="futuristic-radio" type="radio" />
                <div
                className="w-6 h-6 bg-transparent border-2 border-white rounded-full peer-checked:bg-white peer-checked:border-white peer-hover:shadow-lg peer-hover:shadow-white peer-checked:shadow-lg peer-checked:shadow-white transition duration-300 ease-in-out"
                ></div>
                <span className="ml-2 text-white">Not Active</span>
            </label>
            </div>

        </div>
        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold uppercase hover:bg-gray-200 transition-all"
          >
            Submit Project
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdminPage
