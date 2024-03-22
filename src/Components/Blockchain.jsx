import React from 'react'
import chaincard from '../assets/images/png/block-chain-img.png'

function Blockchain() {
    return (
        <>
            <section className='bg-block-chain' id="explore">
                <div className="container-3 d-flex justify-content-end pt-40">
                    <div className="block-chain-box pr-23 pb-4 pb-sm-0">
                        <div className="row">
                            <div className="col-12 col-sm-5">
                                <img src={chaincard} alt="chain-img" className='w-100' />
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className="d-flex gap-2 gap-sm-3 align-items-sm-center pt-8">
                                    <hr className='blockcard-line' />
                                    <p className=' font-inter fw-300 text-23 lh-28 lts-72 text-white mb-0 max-w-281 '>We're building a new
                                        take on <span className=' fw-700 text-22'>blockchain infrastructure</span></p>
                                </div>
                                <p className=' font-inter fw-500 text-15 lh-21-6 lts-64 color-green mb-0 text-end cursor-pointer'>Deploy apps <span><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </section>
        </>
    )
}

export default Blockchain