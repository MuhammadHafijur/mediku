import React from 'react';

const Faq = () => {
    return (
        
<div className="bg-lightblue py-20 px-4">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
        <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Frequently-asked questions
        </h2>
        <dl className="w-full md:w-2/3">
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                Is Mediku Health Care a government agency ?
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                No, Mediku Health Care is a 501 (c)3 non-profit network of community-based Federally Qualified Health Centers (FQHC) offering comprehensive medical, dental, pharmacy and behavioral health, and specialty healthcare services in Pierce County. Mediku Health Care is a HRSA FTCA deemed facility
                </p>
            </dd>
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                Where does Mediku Health Care get its income ?
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                1. Patient fees (83%). These are fees received from insurance companies, Medicare, Medicaid, and the patients themselves. Uninsured and under-insured patients are charged on a sliding fee scale based on family size, income and services provided. 2. Government grants (10%) are used to help provide services to uninsured and under-insured patients. 3. Other grants, donations and miscellaneous (7%).
                </p>
            </dd>
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                Are Providers (doctors/dentists) volunteers, part-time or full-time employees ?
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                ll of our medical and dental providers are employees of Community Health Care. Most work full-time but some work only part-time due to the program in which they work. We also have some volunteer providers who provide specialty care.
                </p>
            </dd>
            <dt className="mb-4">
                <h3 className="text-xl font-semibold">
                How many employees does Mediku Health Care have?
                </h3>
            </dt>
            <dd className="mb-16">
                <p>
                Mediku Health Care currently has more than 300 employees.
                </p>
            </dd>
        </dl>
    </div>
</div>

    );
};

export default Faq;