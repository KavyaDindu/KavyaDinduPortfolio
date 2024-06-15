import WorkItem, { IWorkItem } from "./workItem";

const data: IWorkItem[] = [
  {
    year: "2021-now",
    title: "Service Channel - Product Manager",
    duration: "3yr",
    details: `Currently leading efforts in scoping & designing a portfolio of Provider marketplace features that are projected to increase targeted client revenue by 33%.

Led and organized product operations, release management, and product telemetry using Gainsight across four product modules for Service Automation, Assets, Planned Maintenance, & Analytics.`,
  },
  {
    year: "2019",
    title: "Centrify - Associate Product Manager",
    duration: "2yr",
    details: `Defined and managed product roadmap, design, sales/support enablement, and release launches for Centrify’s cloud first clients, AD-bridging clients, and the vaulting mobile app (a product portfolio that comprises 72% of company renewals). 

Established a rotational product management intern program, that introduces interns to the needs of common PM stakeholders – customers, engineering, support, sales, executive strategy.

Designed & pitched first-ever minority based intra company mentorship program that focused on helping employees from minority communities find an inspirational member of the company to help navigate corporate culture and their career space. 

Developed a prototype for a Splunk integration app that creates a user risk score by utilizing company log data.`,
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
