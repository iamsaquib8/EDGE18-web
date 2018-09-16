export class MegaEventService {
  Event = [
    {
      name: `Edge Deeds`,
      img: `me-1`,
      about: `With respect to social work EDGE has always tried to break the boundaries and set new levels with each passing year.
       In spite of being a Techno-management fest Edge has encouraged its members and participants to take part in noble causes and
        do their part for the betterment of the society. Edge Deeds is the medium through which we try to provide a helping hand for
         the underprivileged of our society. Keeping our environment clean, opposing addiction, supporting cancer patients, providing
          company and other necessities for orphans are some of the steps organized under the purview of EDGE DEEDS.`,
      phase: [
        `The collection drive mainly focuses on “Reduce, Reuse and Recycle”. We will be collecting plastic waste (old pens, food packets)
         and hence sending it for recycling to the respective factories. With demand for plastics growing exponentially, there is a
        pressing need to rapidly increase plastic recycling capability. Besides that, we will also collect books, food packets and old
        clothes for the destitute section of the society. Our main motive will be to protect our environment, and act as a catalyst for
          bringing change into the lives of underpriviledge people. All that people need is the will to help others and donate for a noble cause.`,
        ` “A walk against child labor” is a movement involving not only the students from our college but also supporters from all around the city.
         We are determined to raise awareness about the issue and give out a strong message to the world i.e.,to stop exploiting the
          childhood of our future generations. Child labour is considered to be the exploitation of human rights and can be
           termed as a “necessary evil”. Our main purpose through this movement will be to motivate and bring together as many individuals
            and organizations possible to protect and promote the rights of all children. Various NGOs will join us for this movement, to help us
                        make everyone realize that the education of children will benefit the economy of our country as they are likely to get out of their poverty-stricken situation someday.
                      Limiting education is like limiting prosperity. `,
        `                        

        "If you have knowledge, let others light their candles in it.” -Margaret Fuller. During the last phase of the series of philanthropic activities, the Geekonix Members will reach out
         to the poor and oppressed children of the society to add the colors of knowledge and enlightenment. Teach A Day is an initiative to give a chance to make a difference in the society 
         by imparting the light of knowledge. The society needs people who strive to make a change. Being a teacher for one day, inspiring young minds and leaving a mark in someone's life is the 
         motto of "Teach A Day". The world has enough of darkness. Take part in Teach A Day and spread your light. `,
  
      ],
      contacts: [
        {name: `Deep Arora`, phn: `+91-8961088404`}
      ]
    },
    {
      name: `Edge Night`,
      img: `me-2`,
      about: `As they say ‘All work and no play makes Jack a dull boy’. The idea behind EDGE Night treads on the same ground.
       It is that time of the day when after intense competition throughout the day, we look for fuel to feed ourselves with energy and
        vigour that revitalises us. With two renowned comedians performing on stage, we highlight on bringing
         out the ‘ART’ in ‘smART’.`,
      phase: [],
      
    contacts: [
      
      {name: `Abhishek Singh`, phn: `+91-8820396924`}
    ]
    },
    {
      name: `Edge Talks`,
      img: `me-3`,
      about: `An idea that is coherent to TED, EDGE Talks aims to provide a stage which knows no barrier between establishment and ambition.
       EDGE Talks promises to be an evening full of conversation,poetry and inspiration. With four eminent personalities,EDGE Talks promises to be an episode filled with interaction which
        is what segregates it from a mundanely normal seminar or class.`,
      phase: [],
      
    contacts: [
      
      {name: `Ayush Tiwari`, phn: `+91-7980627475`}
    ]
    }
  ];

  getCategory(subevent: string) {
    const category = this.Event.find(
      (s) => {
        return s.name === subevent;
      }
    );

    return category;
  }
}
