import DonateButton from "./DonateButton";

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="mb-3"><a href="https://github.com/#" target="_blank" className="text-blue-600" rel="noreferrer">LinkPro</a> is a linked list single page built on React and Tailwind. <br className="hidden sm:block"/>
      If you find this useful, feel free to buy me a coffee 
      <br/>
      <a href="https://github.com/#" target="_blank" className="text-blue-600" rel="noreferrer">README</a>
      <br/><br/>
      <DonateButton />
      <i className="fa fa-coffee"></i></p>
      <p className="">Code with ❤️ by <a href="https://github.com/#" target="_blank" className="text-blue-600" rel="noreferrer">Ayush Gupta</a></p>
    </div>
  );
}

export default FooterDisclaimer;
