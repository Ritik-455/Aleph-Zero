import React from 'react'
import flash from '../assets/images/png/community-img.png'
import azer from '../assets/images/png/azero-wallet.png'
import azer2 from '../assets/images/png/azero-wallet2.png'
import azer3 from '../assets/images/png/azero-wallet3.png'

function Community() {
    return (
        <>
            <section id="Community">
                <div className="container-2 py-25">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={flash} alt="flash" className=' w-100' />
                        </div>
                        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center mt-4 mt-md-0">
                            <div className="">
                                <p className=' font-inter fw-700 text-32 lh-39 lts-85 text-white mb-0 max-w-476'>Community<span className=' fw-300 text-34'>  of over 100,000 people</span></p>
                                <hr className="text-bottom-line mt-22" />
                                <p className=' font-karla fw-300 text-18 lh-27 lts-64 color-grey max-w-475 mt-4 mb-0'>Join us and get involved in a number of ongoing
                                    educational activities run not only by the core team
                                    but also by the community directly.</p>
                                <button className='get-btn font-inter fw-500 text-15 lh-16 lts-64 color-green mb-0 mt-4'>Get involved</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-ecosystem">
                    <div className="container-2 py-35">
                        <div className="d-flex gap-4 justify-content-center flex-wrap">
                            <div className="azero-box position-relative overflow-hidden">
                                <img src={azer} alt="azer" />
                                <div className="pl-33 pt-13">
                                    <div className="d-flex gap-3">
                                        <hr className="card-text-line" />
                                        <p className=' font-inter fw-300 text-20 lh-24 lts-7 text-white mb-0'>AZERO <span className='fw-700 text-19'>wallet</span></p>
                                    </div>
                                    <p className=' font-karla fw-300 text-14 lh-21-12 lts-64 color-lightwhite mb-0 max-w-239 mt-2'>Set up your Aleph Zero wallet to be
                                        able to hold, transfer, or stake your
                                        AZERO coins.</p>
                                </div>
                                <button className='azero-btn d-flex gap-13  align-items-center position-absolute azero-btn-pos'><svg className='btn-svg' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3482 0.798513H16.0964C16.3153 0.798513 16.4952 0.868898 16.636 1.00967C16.7768 1.15044 16.8471 1.33032 16.8471 1.54929V7.29745H15.3456V3.35586L8.09587 10.6056L7.04008 9.54979L14.2898 2.30007H10.3482V0.798513ZM0.329987 2.53469C0.329987 2.33136 0.404283 2.15539 0.552874 2.0068C0.701466 1.85821 0.87743 1.78391 1.08077 1.78391H7.83779V3.28547H1.83155V15.8141H14.3602V9.80787H15.8617V16.5649C15.8617 16.7682 15.7875 16.9442 15.6389 17.0928C15.4903 17.2414 15.3143 17.3157 15.111 17.3157H1.08077C0.87743 17.3157 0.701466 17.2414 0.552874 17.0928C0.404283 16.9442 0.329987 16.7682 0.329987 16.5649V2.53469Z" fill="#00CCAB" />
                                </svg>
                                    <svg className='btn-svg2' width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5711 1.01284L14.0549 0.473213L12.9757 1.55246L17.2457 5.79906H0.282776V7.30062H17.2457L12.9757 11.5472L14.0549 12.6265L19.5919 7.08946C19.7327 6.93305 19.8031 6.75318 19.8031 6.54984C19.8031 6.3465 19.7327 6.16663 19.5919 6.01022L14.5711 1.01284Z" fill="#00CCAB" />
                                    </svg>
                                    <span className=' font-inter fw-500 text-16 lh-16 lts-64 color-green'>Go to</span></button>
                            </div>
                            <div className="azero-box position-relative overflow-hidden">
                                <img src={azer2} alt="azer2 " />
                                <div className="pl-33 pt-13">
                                    <div className="d-flex gap-3">
                                        <hr className="card-text-line" />
                                        <p className=' font-inter fw-300 text-20 lh-24 lts-7 text-white mb-0'>AZERO <span className='fw-700 text-19'>explorer</span></p>
                                    </div>
                                    <p className=' font-karla fw-300 text-14 lh-21-12 lts-64 color-lightwhite mb-0 max-w-239 mt-2'>Familiarize yourself with the Aleph
                                        Zero explorer launched in
                                        collaboration with Subscan.</p>
                                </div>
                                <button className='azero-btn d-flex gap-13  align-items-center position-absolute azero-btn-pos'><svg className='btn-svg' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3482 0.798513H16.0964C16.3153 0.798513 16.4952 0.868898 16.636 1.00967C16.7768 1.15044 16.8471 1.33032 16.8471 1.54929V7.29745H15.3456V3.35586L8.09587 10.6056L7.04008 9.54979L14.2898 2.30007H10.3482V0.798513ZM0.329987 2.53469C0.329987 2.33136 0.404283 2.15539 0.552874 2.0068C0.701466 1.85821 0.87743 1.78391 1.08077 1.78391H7.83779V3.28547H1.83155V15.8141H14.3602V9.80787H15.8617V16.5649C15.8617 16.7682 15.7875 16.9442 15.6389 17.0928C15.4903 17.2414 15.3143 17.3157 15.111 17.3157H1.08077C0.87743 17.3157 0.701466 17.2414 0.552874 17.0928C0.404283 16.9442 0.329987 16.7682 0.329987 16.5649V2.53469Z" fill="#00CCAB" />
                                </svg>
                                    <svg className='btn-svg2' width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5711 1.01284L14.0549 0.473213L12.9757 1.55246L17.2457 5.79906H0.282776V7.30062H17.2457L12.9757 11.5472L14.0549 12.6265L19.5919 7.08946C19.7327 6.93305 19.8031 6.75318 19.8031 6.54984C19.8031 6.3465 19.7327 6.16663 19.5919 6.01022L14.5711 1.01284Z" fill="#00CCAB" />
                                    </svg>
                                    <span className=' font-inter fw-500 text-16 lh-16 lts-64 color-green'>Go to</span></button>
                            </div>
                            <div className="azero-box position-relative overflow-hidden">
                                <img src={azer3} alt="azer" />
                                <div className="pl-33 pt-13">
                                    <div className="d-flex gap-3">
                                        <hr className="card-text-line" />
                                        <p className=' font-inter fw-300 text-20 lh-24 lts-7 text-white mb-0'>AZERO <span className='fw-700 text-19'>utility</span></p>
                                    </div>
                                    <p className=' font-karla fw-300 text-14 lh-21-12 lts-64 color-lightwhite mb-0 max-w-239 mt-2'>Learn more about the utility and
                                        economics behind AZERO - Aleph
                                        Zero's native coin.</p>
                                </div>
                                <button className='azero-btn d-flex gap-13  align-items-center position-absolute azero-btn-pos'><svg className='btn-svg' width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3482 0.798513H16.0964C16.3153 0.798513 16.4952 0.868898 16.636 1.00967C16.7768 1.15044 16.8471 1.33032 16.8471 1.54929V7.29745H15.3456V3.35586L8.09587 10.6056L7.04008 9.54979L14.2898 2.30007H10.3482V0.798513ZM0.329987 2.53469C0.329987 2.33136 0.404283 2.15539 0.552874 2.0068C0.701466 1.85821 0.87743 1.78391 1.08077 1.78391H7.83779V3.28547H1.83155V15.8141H14.3602V9.80787H15.8617V16.5649C15.8617 16.7682 15.7875 16.9442 15.6389 17.0928C15.4903 17.2414 15.3143 17.3157 15.111 17.3157H1.08077C0.87743 17.3157 0.701466 17.2414 0.552874 17.0928C0.404283 16.9442 0.329987 16.7682 0.329987 16.5649V2.53469Z" fill="#00CCAB" />
                                </svg>
                                    <svg className='btn-svg2' width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5711 1.01284L14.0549 0.473213L12.9757 1.55246L17.2457 5.79906H0.282776V7.30062H17.2457L12.9757 11.5472L14.0549 12.6265L19.5919 7.08946C19.7327 6.93305 19.8031 6.75318 19.8031 6.54984C19.8031 6.3465 19.7327 6.16663 19.5919 6.01022L14.5711 1.01284Z" fill="#00CCAB" />
                                    </svg>
                                    <span className=' font-inter fw-500 text-16 lh-16 lts-64 color-green'>Go to</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Community