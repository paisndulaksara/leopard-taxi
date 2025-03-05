import BookTaxiForm from "../../components/BookTaxiForm/BookTaxiForm"

import tariff1 from "../../images/tariff-1.png";
import tariff2 from "../../images/tariff-2.png";
import tariff3 from "../../images/tariff-3.png";
import tariff4 from "../../images/tariff-4.png";


const BookTaxi = () => {
    return (
        <div>
           <div className="bg-[var(--secondary-color)]">
           <BookTaxiForm />
           </div>

            <section className="bg-[var(--trinary-color)] py-12">
                <div className="xl7-container">
                    <div className="mb-8 text-center">
                        <h4 className="fira-sans-condensed-h3-sm uppercase text-[var(--primary-color)]">
                            See Our
                        </h4>
                        <h2 className="fira-sans-condensed-h2 text-[var(--fourth-color)]">
                            Tariffs
                        </h2>
                    </div>

                    {/* 4 Cards Layout */}
                    <div
                        className="
                                    grid
                                    grid-cols-1
                                    md:grid-cols-2
                                    lg:grid-cols-4
                                    gap-8
                                    "
                    >
                        {/* Card 1: Standard */}
                        <div
                            className="
                                     bg-white
                                        p-12
                                        text-center
                                        rounded-md
                                        hover:shadow-lg
                                        transition-shadow
                                        border
                                        border-transparent
                                        "
                        >
                            <img
                                src={tariff1}
                                alt="Standard"
                                className="mx-auto mb-4    h-32 object-contain"
                            />
                            <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                                Standard
                            </h3>
                            <p className="open-sans-p text-[var(--fourth-color)]">
                                Standard sedan for a drive around the city at your service,
                                <br />
                                <span className="open-sans-span"> $4.5/km </span>
                            </p>
                        </div>

                        {/* Card 2: Business */}
                        <div
                            className="
                  bg-white
                  p-12
                  text-center
                  rounded-md
                  hover:shadow-lg
                  transition-shadow
                  border
                  border-transparent
                "
                        >
                            <img
                                src={tariff2}
                                alt="Business"
                                className="mx-auto mb-4    h-32 object-contain"
                            />
                            <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                                Business
                            </h3>
                            <p className="open-sans-p text-[var(--fourth-color)]">
                                Standard sedan for a drive around the city at your service,
                                <br />
                                <span className="open-sans-span"> $4.5/km </span>
                            </p>
                        </div>

                        {/* Card 3: VIP (with border) */}
                        <div
                            className="
                      relative
                      bg-white
                      p-12
                      text-center
                      rounded-md
                      hover:shadow-lg
                      transition-shadow
                      border
                      border-[var(--primary-color)]

                      /* 1) Triangle corner (using :after, lower z-index) */
                      after:content-['']
                      after:absolute
                      after:top-0
                      after:right-0
                      after:z-10
                      after:border-solid
                      after:border-t-0
                      after:border-r-[55px]
                      after:border-b-[55px]
                      after:border-l-0
                      after:border-t-transparent
                      after:border-r-[var(--primary-color)]
                      after:border-b-transparent
                      after:border-l-transparent

                      /* 2) Star icon (using :before, higher z-index) */
                      before:content-['★']
                      before:absolute
                      before:z-20
                      before:top-0
                      before:right-2
                      before:text-white
                      before:text-xl
                      "
                        >
                            <img
                                src={tariff3}
                                alt="VIP"
                                className="mx-auto mb-4 h-32 object-contain"
                            />
                            <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                                VIP
                            </h3>
                            <p className="open-sans-p text-[var(--fourth-color)]">
                                Standard sedan for a drive around the city at your service,
                                <br />
                                <span className="open-sans-span">$4.5/km</span>
                            </p>
                        </div>

                        {/* Card 4: Bus-minivan */}
                        <div
                            className="
                    bg-white
                      p-12
                      text-center
                      rounded-md
                      hover:shadow-lg
                      transition-shadow
                      border
                      border-transparent
                    "
                        >
                            <img
                                src={tariff4}
                                alt="Bus-minivan"
                                className="mx-auto mb-4    h-32 object-contain"
                            />
                            <h3 className="fira-sans-condensed-h3-sm uppercase text-[var(--fourth-color)] mb-2">
                                Bus-minivan
                            </h3>
                            <p className="open-sans-p text-[var(--fourth-color)]">
                                Standard sedan for a drive around the city at your service,
                                <br />
                                <span className="open-sans-span"> $4.5/km </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BookTaxi