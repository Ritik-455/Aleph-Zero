import React from 'react'
import buildcard from '../assets/images/png/build-fast-card-img.png'
import scalecard from '../assets/images/png/build-fast-card-img2.png'

function Build() {
    return (
        <>
            <section id="Build">
                <div className="container-2 pb-52">
                    <div className="row mt-76">
                        <div className="d-flex justify-content-center d-md-block col-12 col-md-6">
                            <div className="build-card">
                                <img src={buildcard} alt="build-card" className='w-100' />
                                <div className="card-padding">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="card-text-line"></div>
                                        <p className=' font-inter fw-700 text-22 lh-28 lts-72 text-white mb-0'>Build<span className=' font-inter fw-300 text-24'> fast</span></p>
                                    </div>
                                    <p className=' font-karla fw-300 text-16 lh-24 lts-64 color-grey mb-0 max-w-468 mt-18'>Benefit from a unique combination of our consensus
                                        protocol, AlephBFT, and ink!, the Rust-based WASM
                                        programming environment.</p>
                                    <p className=' font-inter fw-500 text-15 lh-21-6 lts-64 color-green mb-0 text-end mt-41 cursor-pointer'>Deploy apps <span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_569)">
                                            <path d="M14.6483 7.24306L14.1321 6.70344L13.0529 7.78268L17.3229 12.0293H0.359985V13.5308H17.3229L13.0529 17.7774L14.1321 18.8567L19.6691 13.3197C19.8099 13.1633 19.8803 12.9834 19.8803 12.7801C19.8803 12.5767 19.8099 12.3969 19.6691 12.2404L14.6483 7.24306Z" fill="#00CCAB" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_569">
                                                <rect width="24.64" height="25" fill="white" transform="matrix(1 0 0 -1 0.359985 25.28)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </span></p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center d-md-block col-12 col-md-6">
                            <div className="build-card mt-4 mt-md-0">
                                <img src={scalecard} alt="scalecard" className='w-100' />
                                <div className="card-padding">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="card-text-line"></div>
                                        <p className=' font-inter fw-700 text-22 lh-28 lts-72 text-white mb-0'>Scale<span className=' font-inter fw-300 text-24'> easy</span></p>
                                    </div>
                                    <p className=' font-karla fw-300 text-16 lh-24 lts-64 color-grey mb-0 max-w-468 mt-18'>Stake your AZERO with a trusted network of validators—or
                                        help scale Aleph Zero and make it more secure for everyone
                                        involved by becoming one yourself.</p>
                                    <p className=' font-inter fw-500 text-15 lh-21-6 lts-64 color-green mb-0 text-end mt-41 cursor-pointer'>Validate and nominate <span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_0_569)">
                                            <path d="M14.6483 7.24306L14.1321 6.70344L13.0529 7.78268L17.3229 12.0293H0.359985V13.5308H17.3229L13.0529 17.7774L14.1321 18.8567L19.6691 13.3197C19.8099 13.1633 19.8803 12.9834 19.8803 12.7801C19.8803 12.5767 19.8099 12.3969 19.6691 12.2404L14.6483 7.24306Z" fill="#00CCAB" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_569">
                                                <rect width="24.64" height="25" fill="white" transform="matrix(1 0 0 -1 0.359985 25.28)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    </span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-2">
                    <div className=" d-flex justify-content-between flex-wrap flex-lg-nowrap">
                        <div className="max-w-148 d-flex flex-column align-items-center w-100 order-4 order-sm-1">
                            <p className=' font-inter fw-700 text-21 lh-28 lts-72 text-white mb-0'>0.9 sec</p>
                            <div className='text-bottom-line mt-3' ></div>
                            <p className=' font-karla fw-300 text-16 lh-24 lts-64 color-grey mb-0 mt-3'>Time to finality</p>
                        </div>
                        <div className="max-w-225 d-flex flex-column align-items-center w-100 order-1 order-sm-2 ">
                            <p className=' font-inter fw-700 text-21 lh-28 lts-72 text-white mb-0'>0.0003 AZERO</p>
                            <div className='text-bottom-line mt-3' ></div>
                            <p className=' font-karla fw-300 text-16 lh-24 lts-64 color-grey mb-0 mt-3'>Avg cost per transaction</p>
                        </div>
                        <div className="max-w-104 d-flex flex-column align-items-center w-100 order-2 order-sm-3">
                            <p className=' font-inter fw-700 text-21 lh-28 lts-72 text-white mb-0'>57449</p>
                            <div className='text-bottom-line mt-3' ></div>
                            <p className=' font-karla fw-300 text-16 lh-24 lts-64 color-grey mb-0 mt-3'>Accounts</p>
                        </div>
                        <div className="max-w-177 d-flex flex-column align-items-center w-100 order-3 order-sm-4">
                            <p className=' font-inter fw-700 text-21 lh-28 lts-72 text-white mb-0'>123</p>
                            <div className='text-bottom-line mt-3' ></div>
                            <p className=' font-karla fw-300 text-16 lh-24 lts-64 color-grey mb-0 mt-3'>Mainnet validators</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Build