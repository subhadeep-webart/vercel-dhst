import CommonButton from "../../common/CommonButton";

const ContactForm = () => {
    return (
        <div className="w-full h-full rounded-xl bg-peach max-w-[644px] p-16">
            <h3 className="text-dark-blue text-xl 2xl:text-3xl leading-8 2xl:leading-10 mb-5 text-center">Fill The Form For Enquire</h3>

             <form className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Full name</label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full rounded-lg bg-gray-100 px-2 2xl:px-4 py-3 outline-none text-sm 2xl:text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="w-full rounded-lg bg-gray-100 px-2 2xl:px-4 py-3 outline-none text-sm 2xl:text-base"
            />
          </div>

  
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Phone number <span className="text-gray-500">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="w-full rounded-lg bg-gray-100 px-2 2xl:px-4 py-3 outline-none text-sm 2xl:text-base"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              placeholder="Type here"
              rows="4"
              className="w-full rounded-lg bg-gray-100 px-2 2xl:px-4 py-3 outline-none resize-none text-sm 2xl:text-base"
            />
          </div>

          <div className="flex justify-center pt-20">
           <CommonButton title="Submit" className={"w-56"}/>
          </div>

        </form>
        </div>
    )
};

export default ContactForm;