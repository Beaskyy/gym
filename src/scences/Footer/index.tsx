import Logo from "@/assets/logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            quas eum error, dolor, blanditiis animi eligendi odio sequi in cum
            quasi veritatis omnis nobis recusandae laudantium, iure incidunt!
            Soluta fuga deleniti aliquam magnam vitae rem.
          </p>
          <p>&copy; Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">LinkedIn</p>
          <p className="my-5">Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea
            neque in!
          </p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
