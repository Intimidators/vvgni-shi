import PastWebinarCard from "../WebinarCard/PastWebinarCard";
import PresentWebinarCard from "../WebinarCard/PresentWebinarCard";
import FutureWebinarCard from "../WebinarCard/FutureWebinarCard";
import Button from "@mui/material/Button";

import "./HomePage.css";

const HomePage = () => {
  const futureWebinar = [
    {
      imageUrl:
        "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8soc8e844rgg8s62v6hil5dii4-20190103052932.Medi.jpeg",
      name: "Cyber Suraksha",
      department: "Ministry of Wireless communication",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
      registered: false,
    },
    {
      imageUrl:
        "https://inc42.com/wp-content/uploads/2022/01/aicte-featured-1.jpg",
      name: "Women Impowerment",
      department: "Ministry of Health",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh NIrmla sitaraman",
      registered: true,
    },
    {
      imageUrl:
        "https://images.hindustantimes.com/img/2021/11/02/1600x900/aicte-office-chanderlok-janpath-seventh-floor-building_9ed7f172-e9be-11e9-8d06-17233a3ef1ac_1635840330780.jpg",
      name: "Increasing Pollution",
      department: "Ministry of Environment",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
      registered: false,
    },
    {
      imageUrl:
        "https://images.hindustantimes.com/img/2021/11/02/1600x900/aicte-office-chanderlok-janpath-seventh-floor-building_9ed7f172-e9be-11e9-8d06-17233a3ef1ac_1635840330780.jpg",
      name: "Increasing Pollution",
      department: "Ministry of Environment",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
      registered: false,
    },
    {
      imageUrl:
        "https://images.hindustantimes.com/img/2021/11/02/1600x900/aicte-office-chanderlok-janpath-seventh-floor-building_9ed7f172-e9be-11e9-8d06-17233a3ef1ac_1635840330780.jpg",
      name: "Increasing Pollution",
      department: "Ministry of Environment",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
      registered: false,
    },
  ];
  const presentWebinar = [
    {
      imageUrl:
        "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8soc8e844rgg8s62v6hil5dii4-20190103052932.Medi.jpeg",
      name: "Cyber Suraksha",
      department: "Ministry of Wireless communication",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
      started: false,
    },
    {
      imageUrl:
        "https://inc42.com/wp-content/uploads/2022/01/aicte-featured-1.jpg",
      name: "Women Impowerment",
      department: "Ministry of Health",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh NIrmla sitaraman",
      started: true,
    },
    {
      imageUrl:
        "https://images.hindustantimes.com/img/2021/11/02/1600x900/aicte-office-chanderlok-janpath-seventh-floor-building_9ed7f172-e9be-11e9-8d06-17233a3ef1ac_1635840330780.jpg",
      name: "Increasing Pollution",
      department: "Ministry of Environment",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
      started: false,
    },
  ];
  const pastWebinar = [
    {
      imageUrl:
        "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-8soc8e844rgg8s62v6hil5dii4-20190103052932.Medi.jpeg",
      name: "Cyber Suraksha",
      department: "Ministry of Wireless communication",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
    },
    {
      imageUrl:
        "https://inc42.com/wp-content/uploads/2022/01/aicte-featured-1.jpg",
      name: "Women Impowerment",
      department: "Ministry of Health",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh NIrmla sitaraman",
    },
    {
      imageUrl:
        "https://images.hindustantimes.com/img/2021/11/02/1600x900/aicte-office-chanderlok-janpath-seventh-floor-building_9ed7f172-e9be-11e9-8d06-17233a3ef1ac_1635840330780.jpg",
      name: "Increasing Pollution",
      department: "Ministry of Environment",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
    },
    {
      imageUrl:
        "https://images.hindustantimes.com/img/2021/11/02/1600x900/aicte-office-chanderlok-janpath-seventh-floor-building_9ed7f172-e9be-11e9-8d06-17233a3ef1ac_1635840330780.jpg",
      name: "Increasing Pollution",
      department: "Ministry of Environment",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
    },
    {
      imageUrl:
        "https://images.hindustantimes.com/img/2021/11/02/1600x900/aicte-office-chanderlok-janpath-seventh-floor-building_9ed7f172-e9be-11e9-8d06-17233a3ef1ac_1635840330780.jpg",
      name: "Increasing Pollution",
      department: "Ministry of Environment",
      date: "8:30 AM SEPT 18 2022",
      host: "Sh Nittin Gadkari",
    },
  ];
  return (
    <div className="webinar__home__page">
      <div className="webinar__home__page__container">
        <div className="webinar__sections">

          <div className="past__webinars webinar__section">
            <div className="past__webinars--heading webinar__section--heading">
              <h4>Past Webinars</h4>
            </div>
            <div className="webinars__list">
              {pastWebinar &&
                pastWebinar.map((webinar,index) => (
                  <PastWebinarCard key={index} webinar={webinar} />
                ))}
              <div className="past__webinars__list--footer webinars__list--footer">
                <Button variant="outlined">see more</Button>
              </div>
            </div>
          </div>


          <div className="ongoing__webinars webinar__section">
            <div className="ongoing__webinars--heading webinar__section--heading">
              <h4>Live Webinars</h4>
            </div>
            <div className="webinars__list">
              {presentWebinar &&
                presentWebinar.map((webinar, index) => (
                  <PresentWebinarCard key={index} webinar={webinar} />
                ))}
              <div className="ongoing__webinars__list--footer webinars__list--footer">
                <Button variant="outlined">see more</Button>
              </div>
            </div>
          </div>



          <div className="future__webinars webinar__section">
            <div className="future__webinars--heading webinar__section--heading">
              <h4>Future Webinars</h4>
            </div>
            <div className="webinars__list">
              {futureWebinar.map((webinar,index) => (
                <FutureWebinarCard key={index} webinar={webinar} />
              ))}

              <div className="future__webinars__list--footer webinars__list--footer">
                <Button variant="outlined">see more</Button>
              </div>
            </div>
          </div>






        </div>
      </div>
    </div>
  );
};
export default HomePage;
