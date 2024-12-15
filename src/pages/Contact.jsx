import ContactBreadCrumb from "@/components/ContactBreadCrumb";
import ContactForm from "@/components/ContactForm";
import ContactPageLeftSide from "@/components/ContactPageLeftSide";
import SubTitle from "@/components/SubTitle";

const Contact = () => {
  return (
    <div className=" ">
      <div
        className="bg-cover bg-center bg-no-repeat bg-black  opacity-100 py-24 rounded-2xl  md:mx-20"
        style={{ backgroundImage: `url("/src/assets/hero-bg.jpg")` }}
      >
        <h1 className="text-center font-bold text-2xl sm:text-8xl text-white">
          {" "}
          Contact Us
        </h1>
        <ContactBreadCrumb />
      </div>
      <div className="container mx-auto  py-20">
        <div className="flex flex-col md:flex-row  gap-20">
          <ContactPageLeftSide />
          <ContactForm />
        </div>
        <div className="pt-20">
          <SubTitle subTitle="Location" title="How to reach our location" />
          <div className="flex items-center justify-center py-10">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1298.032376269406!2d91.14590285715984!3d23.866105647106696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375409abb3bfe32b%3A0xcf80d17e0771ef9e!2sAharanda%20Monshi%20Bari!5e1!3m2!1sen!2sus!4v1734270029594!5m2!1sen!2sus"
              width={1200}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
