import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs'
import './ContactPage.css';

const TeamInfo = [
  {
    username: 'Tran Huu Vinh',
    position: 'Team Leader',
    avatar: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/352234852_280012191222586_6268670833473687930_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=S5_-fci1p28AX8EJK-c&_nc_ht=scontent.fsgn5-5.fna&_nc_e2o=s&oh=00_AfCGyVqmE-5LrTDeVOiA1j66KLOEC2pX3s-a4bf-Us5uLw&oe=65352031'
  },
  {
    username: 'Nguyen Van Khoa',
    position: 'Back-end Developer',
    avatar: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t1.6435-9/52105036_2280736395501207_1666640747585077248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7a1959&_nc_ohc=z57CYG-I43QAX9-_uYG&_nc_ht=scontent.fdad3-5.fna&_nc_e2o=s&oh=00_AfBgMWiyAAvRd4CTmIK8bkN2KjvMf_HWquEMsqzgTLezfA&oe=65585F56',
  },
  {
    username: 'Tran Hong Duc',
    position: 'Back-end Developer',
    avatar: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/273163403_1119529748849359_6980097327525230278_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=blONY53_X1UAX-ha3-b&_nc_ht=scontent.fdad3-4.fna&_nc_e2o=s&oh=00_AfAAXRGlhV6QVUEi9JmPgmxlgTCkTWPNp3dM5mJfesmviw&oe=65354D43',
  },
  {
    username: 'Le Tien Dat',
    position: 'Front-end Developer',
    avatar: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/379906341_867277411396964_5825907384060714891_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qkx1htISB20AX-MymrJ&_nc_ht=scontent.fsgn5-5.fna&_nc_e2o=s&oh=00_AfA6qM-aAmOd0tMJVCeaCmH2XSY-xk99VKsWETeji3_OOg&oe=65350FE8',
  },
  {
    username: 'Phan Tan Quynh',
    position: 'Front-end Developer',
    avatar: 'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/83914366_3415977998473960_3528070060318916608_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=4dc865&_nc_ohc=Gqbgtop7MkcAX8VE8nF&_nc_ht=scontent.fdad3-4.fna&_nc_e2o=s&oh=00_AfDPWIOxZbeVzYnpLJ_zxEhOEt-UncAcz72XPjCmiSJntQ&oe=65584BB8',
  },
]

const ContactPage = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">ABOUT US</h1>
              <p className="lead text-muted mb-0">We are the team that created this astonishing project, I think.<br /> But we tried our best!</p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="mb-4">
            <div className="lg:w-5/12">
              <h2 className="text-4xl font-bold">Our team</h2>
              <p className="italic text-xl font-medium text-orange-500">Nguoi Mien Nui Chat</p>
              <p className="italic text-gray-500">The most (un)perfectly balanced team that you can get!!!</p>
            </div>
          </div>
          <div className="flex justify-around">
            {
              TeamInfo.slice(0, 3).map((member, index) => {
                return (
                  <div className="w-1/4 shadow-2xl" key={index}>
                    <div className="bg-white rounded shadow-sm py-4 px-4">
                      <img src={member.avatar} alt={member.username} className="w-[250px] !h-[250px] object-cover object-center rounded-circle mb-3 img-thumbnail shadow-sm" />
                      <h5 className="mb-0 text-center">{member.username}</h5>
                      <p className="small text-uppercase text-muted text-center">{member.position}</p>
                      <div className="flex justify-center">
                        <ul className="mt-2 flex p-0">
                          <li className="inline-block "><a href="#" className="social-link"><BsFacebook fontSize={20} /></a></li>
                          <li className="inline-block ml-2"><a href="#" className="social-link"><BsGithub fontSize={20} /></a></li>
                          <li className="inline-block ml-2"><a href="#" className="social-link"><BsInstagram fontSize={20} /></a></li>
                          <li className="inline-block ml-2"><a href="#" className="social-link"><BsTwitter fontSize={20} /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className="flex justify-around mt-10">
            {
              TeamInfo.slice(3, 5).map((member, index) => {
                return (
                  <div className="w-1/4 shadow-2xl" key={index}>
                    <div className="bg-white rounded shadow-sm py-4 px-4">
                      <img src={member.avatar} alt={member.username} className="w-[250px] !h-[250px] object-cover object-center rounded-circle mb-3 img-thumbnail shadow-sm" />
                      <h5 className="mb-0 text-center">{member.username}</h5>
                      <p className="small text-uppercase text-muted text-center">{member.position}</p>
                      <div className="flex justify-center">
                        <ul className="mt-2 flex p-0">
                          <li className="inline-block "><a href="#" className="social-link"><BsFacebook fontSize={20} /></a></li>
                          <li className="inline-block ml-2"><a href="#" className="social-link"><BsGithub fontSize={20} /></a></li>
                          <li className="inline-block ml-2"><a href="#" className="social-link"><BsInstagram fontSize={20} /></a></li>
                          <li className="inline-block ml-2"><a href="#" className="social-link"><BsTwitter fontSize={20} /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">(Un)Professional</h2>
              <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Fully (Un)Employed</h2>
              <p className="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
            </div>
          </div>
        </div>
      </div>



      <footer className="bg-light pb-5">
        <div className="container text-center">
          <p className="font-italic text-muted mb-0">&copy; LTMNC Company.com <br /> All rights reserved.</p>
        </div>
      </footer>

    </>
  )
};

export default ContactPage;
