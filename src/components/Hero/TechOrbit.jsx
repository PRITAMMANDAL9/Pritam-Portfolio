import "./Hero.css";

import { techStack } from "./heroData";

export default function TechOrbit() {

    return (

        <div className="tech-orbit">

            <div className="orbit-ring"></div>

            {

                techStack.map((tech) => {

                    const Icon = tech.icon;

                    return (

                        <div
                            key={tech.id}
                            className={`orbit satellite ${tech.className}`}
                        >

                            <div className="orbit-item">

                                <Icon
                                    style={{
                                        color: tech.color
                                    }}
                                />

                                <span>
                                    {tech.name}
                                </span>

                            </div>

                        </div>

                    );

                })

            }

        </div>

    );

}