import React, { Fragment } from "react";
import Section from "../section/section";
import Navbar2 from "../../components/Common_Components/Navbar2";
import style from "./wm.module.css";
import PageTitle from "../../components/Common_Components/PageTitle";

const WebMasters = () => {
    return (
        <Fragment>
            <Navbar2 />

            <Section>
                <div className={style.title_div}>
                    <PageTitle title="Web Masters" />
                </div>
                <div className={style.outter_div}>

                    <div className={style.left_div}>
                        <div className={style.content_div}>
                            <div className={style.image_div}>
                                <img
                                    className={`${style.image}`}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq6gaTf6N93kzolH98ominWZELW881HqCgw&usqp=CAU"
                                ></img>
                            </div>

                            <div className={style.name_div}>
                                <span>Abhishek Chorotiya</span>
                            </div>

                            <div className={style.socials_div}>
                                <div
                                    style={{ width: "100%", padding: "1rem" }}
                                >

                                    <h4 className="pt-1 pb-2 d-flex justify-content-center">
                                        Social Profiles
                                    </h4>

                                    <div className="d-flex justify-content-center">
                                        <a className="btn-icon" href="#">
                                            <i className="bi bi-instagram p"></i>
                                        </a>

                                        <a
                                            className="btn-icon"
                                            href="https://github.com/Piyush-Parmar-28?tab=repositories"
                                            target="_blank"
                                        >
                                            <i className="bi bi-github 2"></i>
                                        </a>

                                        <a
                                            className="btn-icon"
                                            href="https://www.linkedin.com/in/piyush-parmar-76b97820b/"
                                            target="_blank"
                                        >
                                            <i className="bi bi-linkedin"></i>
                                        </a>

                                        <a
                                            className="btn-icon"
                                            href="https://www.linkedin.com/in/piyush-parmar-76b97820b/"
                                            target="_blank"
                                        >
                                            <i className="bi bi-whatsapp"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.right_div}>
                        <div className={style.content_div}>
                            <div className={style.image_div}>
                                <img
                                    className={style.image}
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQq6gaTf6N93kzolH98ominWZELW881HqCgw&usqp=CAU"
                                ></img>
                            </div>
                            <div className={style.name_div}>
                                <span>Piyush Parmar</span>
                            </div>
                            <div className={style.socials_div}>
                                <div
                                    style={{ width: "100%", padding: "1rem" }}
                                >
                                    <h4 className="pt-1 pb-2 d-flex justify-content-center">
                                        Social Profiles
                                    </h4>

                                    <div className="d-flex justify-content-center">
                                        <a className="btn-icon" href="#">
                                            <i className="bi bi-instagram p"></i>
                                        </a>

                                        <a
                                            className="btn-icon"
                                            href="https://github.com/Piyush-Parmar-28?tab=repositories"
                                            target="_blank"
                                        >
                                            <i className="bi bi-github 2"></i>
                                        </a>

                                        <a
                                            className="btn-icon"
                                            href="https://www.linkedin.com/in/piyush-parmar-76b97820b/"
                                            target="_blank"
                                        >
                                            <i className="bi bi-linkedin"></i>
                                        </a>

                                        <a
                                            className="btn-icon"
                                            href="https://www.linkedin.com/in/piyush-parmar-76b97820b/"
                                            target="_blank"
                                        >
                                            <i className="bi bi-whatsapp"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </Fragment>
    );
};

export default WebMasters;
