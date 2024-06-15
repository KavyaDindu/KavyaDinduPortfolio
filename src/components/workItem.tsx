
export interface IWorkItem {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const WorkItem = (workItem: IWorkItem) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-sm md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {workItem.year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">
            {workItem.title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {workItem.duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500">
          {workItem.details}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
