import React from "react";
import Card from "../Card/Card";
import DiagonalLines from "../DiagonalLines/DiagonalLines";

const Credits = () => {
  return (
    <div className="max-w-2xl mx-auto py-6">

      {/* <h1 className="w-full text-4xl font-bold mx-auto text-center">CREDITS</h1>
       */}
      <div className="bg-pink-100 mb-8  w-[400px] h-3 flex items-center mx-auto">
        <h1 className="w-full text-4xl font-bold text-center">CREDITS</h1>
      </div>

      <ul>
        <Card className="mt-6">
          <li>
            <h1 className="text-xl font-bold pb-4">DOCUMENTARIES</h1>
            <ul>
              <li>
                Long Live Montero (Lil Nas X) | San Francisco | Museum & Crane |
                2022
              </li>
              <li>Nova | San Francisco Episode | Little Bay Pictures | 2022</li>
              <li>
                The Principles of Pleasure - Interview | The Front | on Netflix
              </li>
              <li>Untitled Luis Valdez Doc | Structure Films</li>
              <li>
                Untitled BNM Doc - Various | THE OTHRS, LLC - PRESENT/2021
              </li>
              <li>Point of Origin | Lindsey Allen</li>
              <li>
                The Price of Freedom - Interview | Flatbush Pictures | on HBO
              </li>
              <li>The Vow Season 2 | The OTHRS</li>
              <li>Phiona | DOIF Sharon Chang</li>
              <li>Birth WARS | Janet Jarman - Tonala Films</li>
              <li>
                Giving Birth in America Louisiana | Every Mother Counts | on Nat
                Geo
              </li>
              <li>Con Madre | Every Mother Counts | on Nat Geo</li>
              <li>
                Collar of Duty | Animal Planet Canada | 2 - Florida Episode
              </li>
              <li>I AM We | Docutainment Films</li>
              <li>The Lost Generation: The Untold Story of ADHD | Rota6</li>
              <li>Victor Bikinis | Alexander Mallis</li>
            </ul>
          </li>
        </Card>

        <Card className="mt-6">
          <li>
            <h1 className="text-xl font-bold pb-4">CORPORATE</h1>
            <ul>
              <li>Roku | Interviews | Think Out Loud</li>
              <li>Freeman SF | Charlie Uniform Tango</li>
              <li>Untitled Tech Explainers | Exposure Labs</li>
              <li>UBER | John Mcneil Studio</li>
              <li>WPP Commerce 2020 | Convicts NYC</li>
              <li>Miami Showcase & Forum | The Real Deal</li>
              <li>Chase IoT | Magnet Media</li>
              <li>
                Credit Suisse Management Board | ESP Media Productions Inc
              </li>
              <li>Trayvon Martin Foundation with Jaime Foxx</li>
              <li>Moroccan Oil | Black Box Productions</li>
              <li>Kellog School of Management | Odd Machine</li>
              <li>American Airlines Careers | Paradise Video & Film</li>
              <li>
                Mangrove Restoration-Crouch Environmental | Paradise Video &
                Film
              </li>
              <li>Big Brothers Big Sisters Sponsor Campaign | Prime Cinema</li>
              <li>Snyders-Lance (Pretzels) | Paradise Video & Film</li>
            </ul>
          </li>
        </Card>

        <Card className="mt-6">
          <li>
            <h1 className="text-xl font-bold pb-4">WEB</h1>
            <ul>
              <li>
                On The Tee with Jim Nantz for Golf Digest | Think Out Loud 2022
              </li>
              <li>La Prairie Switzerland | Art Basel Miami Beach 2021</li>
              <li>Playboy Centerfold | Art Basel Miami Beach 2021</li>
              <li>Funny or Die Instagram Island | (Key West)</li>
              <li>The Drive (Pagani Huayra Miami)</li>
              <li>OP Campaign | Kellan Lutz & Katrina Bowden</li>
              <li>Chase Bank & The Fresh Diet | Broadway Video</li>
              <li>Tekno101.com | WarecomTech and Techno101.com</li>
              <li>Tile Outlets of America | Perfomix Marketing</li>
            </ul>
          </li>
        </Card>

        <Card className="mt-6">
          <li>
            <h1 className="text-xl font-bold pb-4">TELEVISION</h1>
            <ul>
              <li>Restaurant Dynasty SF | Critical Content</li>
              <li>
                Charlies Angels Behind the Scenes | BTS SOUND MIXER | Disney -
                ET
              </li>
              <li>RPM Miami | BTS SOUND MIXER | MUN2</li>
              <li>18 & Over | Various Episodes | MUN2</li>
              <li>2RSLVJ | Various Episodes | MUN2</li>
            </ul>
          </li>
        </Card>
        <Card className="mt-6">
          <li>
            <h1 className="text-xl font-bold pb-4">COMMERCIALS</h1>
            <ul>
              <li>
                Nectar & DreamMattress | Resident Studios | Mindrite Studios
              </li>
              <li>DIDI APP VR Shoot | En Maze Pictures</li>
              <li>Quaker Oats | Velvet Heaven Films</li>
              <li>CLARITIN | Univision</li>
              <li>Ford | Indy Eye Productions | Univision</li>
              <li>Kraft Foods | Indy Eye Productions | 4 commercials</li>
            </ul>
          </li>
        </Card>

        <Card className="mt-6">
          <li>
            <h1 className="text-xl font-bold pb-4">
              NARRATIVE - FEATURE LENGTH
            </h1>
            <ul>
              <li>Sombras | PrimeCinema</li>
              <li>Open My Eyes | New City Films & PrimeCinema</li>
              <li>Time Warrior | Jaguar Films</li>
              <li>Carpe Diem | Olympusat & Gran Cine Producciones</li>
            </ul>
          </li>
        </Card>
        <Card className="mt-6">
          <li>
            <h1 className="text-xl font-bold pb-4">NARRATIVE - SHORT</h1>
            <ul>
              <li>Dark Side of the Moon | Dustin Bouchard</li>
              <li>Our Young Marriage | Quantus Features</li>
              <li>GRACE | Michael Macias</li>
              <li>Detour | Conuco Films</li>
            </ul>
          </li>
        </Card>
        <Card className="mt-6">
          <li>
            <h1 className="text-xl font-bold pb-4">INDUSTRY QUALIFICATIONS</h1>
            <ul>
              <li>
                Animal Planet, Netflix, NatGeo, Showtime, HBO, Discovery
                Channel, MTV, VH1, Nickelodeon, The OTHRS, CONVICTS, Golf
                Digest, UBER, LA PRAIRIE, Stoopid Buddy Stoodios, Pampers,
                American Airlines, Volkswagen, Critical Content, 51 Minds
                Entertainment, Crispin Porter & Bugosky, SoAh Films, The Front,
                Snyder’s Pretzels, Kraft Foods, Plural Entertainment, At It
                Productions, University of California, Florida International
                University, Univision, Telemundo, Miami Downtown Development
                Authority
              </li>
            </ul>
          </li>
        </Card>
      </ul>
    </div>
  );
};

export default Credits;
