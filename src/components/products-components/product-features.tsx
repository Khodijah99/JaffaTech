import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
// const accrodionContent: any = document.querySelector("accordion-content");

// Array of Details
const featuresDetails: any = [
  {
    img: "assets/images/resources/Admin_portal.png",
    title: "Administrative Web Portal",
    info: " SmartBills provides a modern easy to use administrative web portal for viewing detailed business insights and managing day to day operations.",
  },
  {
    img: "assets/images/resources/web_portal.png",
    title: " Responsive End-User Web Interface",
    info: " Where customers can make payments online, view billing history and lodge complaints or receive support in resolving issues.",
  },
  {
    img: "assets/images/resources/task_auto.png",
    title: "Workflow Engine for Automated and Scheduled Tasks",
    info: " SmartBills provides a modern easy to use administrative web portal for viewing detailed business insights and managing day to day operations.",
  },
  {
    img: "assets/images/resources/pay.png",
    title: "Mobile App with Payment Integration",
    info: "  The SBP’s key advantage on meeting customers where they are means having a presence on popularly used mediums such as Smartphones – with a custom built App allowing an Organization’s customers access to online payments and account management.",
  },
  {
    img: "assets/images/resources/data_cntrl.png",
    title: "  Open API Interface for Data Reporting and Inter-change",
    info: " Through its Open API interface, the SBP can connect to multiple data points – Payment Gateways, IOT devices, Smart Meters, Bank Services etc.",
  },
  {
    img: "assets/images/resources/data.png",
    title: "Extensive Reporting and Analytics",
    info: "  The SBP offers deep business insights through modern and multi-level charts, tables and graphs allowing easy identification of trends or detection of anomalies.",
  },
  {
    img: "assets/images/resources/chat-bubbles.png",
    title: " Chat Bot",
    info: "    As more mainstream consumers spend a significant amount on social media, the SBP exposes its services (such as bill enquiry, and payment assistance) via automated 24/7 chatting assistance called Chat Bots.Hence, Organizations through the SBP are able to offer their services and interact with customers on popular channels such as Facebook and WhatsApp.",
  },
  {
    img: "assets/images/resources/AI.png",
    title: "Artificial Intelligence",
    info: "  The SBP significantly leverages the capabilities of Artificial Intelligence (AI) in assisted payment reconciliations.",
  },
  {
    img: "assets/images/resources/mobile_kiosk.png",
    title: "Mobile Kiosk Integration",
    info: " The SBP through its Open API interfaces allows integration with Mobile Terminals and Kiosks.",
  },
];

//Mapping featuresDetails => Major Features
function MajorFeatures() {
  return (
    <section>
      {featuresDetails.map((featureDetails: any) => {
        return (
          <Features key={featureDetails.title} {...featureDetails}></Features>
        );
      })}
    </section>
  );
}
export default MajorFeatures;
let active: any, setActive: any;
// Structuring Features
function Features(props: any) {
  [active, setActive] = useState<boolean>(false);
  const { img, title, info } = props;
  return (
    <div className="accrodion">
      <div className="accrodion-header d-flex">
        <div className="accrodion__img">
          <img src={img} alt="" />
        </div>
        <div className="accrodion-title">
          <h4> {title} </h4>

          {/* <FontAwesomeIcon icon={faPlus} className="plus show" />
            <FontAwesomeIcon icon={faMinus} className="minus hide" /> */}
          <FontAwesomeIcon
            icon={faCirclePlus}
            onClick={DisplayCaption}
            className="plus"
          />
          <FontAwesomeIcon
            icon={faCircleMinus}
            onClick={RemoveCaption}
            className="minus hide"
          />
        </div>
      </div>
      <div className={`accrodion-content ${active ? "show" : "hide"} `}>
        <div className="inner">
          <p>{info}</p>
        </div>
        {/* <!-- /.inner --> */}
      </div>
    </div>
  );
}

//Contrl function
function DisplayCaption(e: any) {
  let selecteditem: any = e.target.parentElement.parentElement.parentElement;
  console.log(selecteditem);
  if (selecteditem.classList.contains("accrodion")) {
    setActive(false);
    selecteditem.classList.add("show-text");
    selecteditem.classList.add("active");
  } else if (selecteditem.parentElement.classList.contains("accrodion")) {
    selecteditem = selecteditem.parentElement;
    setActive(false);
    selecteditem.classList.add("show-text");
    selecteditem.classList.add("active");
  } else {
    console.log("ntttt");
  }
  // let x: any = selecteditem.queryselector(".accrodion-content");
  // console.log(x);
  // console.log(accrodionContent);
}
function RemoveCaption(e: any) {
  let selecteditem: any = e.target.parentElement.parentElement.parentElement;
  console.log(selecteditem);
  if (selecteditem.classList.contains("accrodion")) {
    setActive(false);
    selecteditem.classList.remove("show-text");
    selecteditem.classList.remove("active");
  } else if (selecteditem.parentElement.classList.contains("accrodion")) {
    selecteditem = selecteditem.parentElement;
    setActive(false);
    selecteditem.classList.remove("show-text");
    selecteditem.classList.remove("active");
  } else {
    console.log("ntttt");
  }
  // let x: any = selecteditem.queryselector(".accrodion-content");
  // console.log(x);
  // console.log(accrodionContent);
}
