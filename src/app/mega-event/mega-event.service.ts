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
        `The collection drive mainly focuses on “Reduce, Reuse and Recycle”.
        We will be collecting plastic waste (old pens, food packets) and hence sending it for recycling to the respective factories.
        Besides that, we will also collect books, food packets and old clothes for the destitute section of the society.
        `,
        ` “There is nothing more beautiful than someone who goes out of their way to make life beautiful for others.”
        -Mandy Hale.

        In this phase, the entire team of Geekonix Members will be reaching out to the day laborers of the society for
         example the old workers of a handicraft industry and helping them complete their 50-day of work in a single day.
        `,
        `“A walk against child labor” is a movement involving not only the students from our college
         but also supporters from all over the city. We are determined to raise an awareness about the issue and give a strong message
          to the world around us to stop exploiting the childhood of our future generation through child labor.`,
        `“If you have knowledge, let others light their candles in it.”
         -Margaret Fuller.
         During the last phase of the series of philanthropic activities, the Geekonix Members will reach out to the poor and the oppressed
          children of the society. They shall dedicate an entire day in imparting their knowledge to the needy by teaching the kids.
        `
      ],
      guests: [],
      contacts: [
        {name: `Deep Arora`, phn: `+91-8961088404`}
      ]
    },
    {
      name: `Edge Night`,
      img: `me-2`,
      about: `As they say ‘All work and no play makes Jack a dull boy’. The idea behind EDGE Night treads on the same ground.
       It is that time of the day when after intense competition throughout the day, we look for fuel to feed ourselves with energy and
        that is why this event is so important. With a plethora of intellectually entertaining events on display, we highlight on bringing
         out the ‘ART’ in ‘smART’.`,
      phase: [],
      guests: [{
        img: 'n-1',
        name: 'Abhishek Upamanyu'
      },
      {
        img: 'n-2',
        name: 'East India Comedy'
      },
      {
        img: 'n-3',
        name: 'AIB'
      },
      {
        img: 'n-4',
        name: 'Kannan Gill'
      }
      
    ],
    contacts: [
      
      {name: `Abhishek Singh`, phn: `+91-8820396924`}
    ]
    },
    {
      name: `Edge Talks`,
      img: `me-3`,
      about: `An idea that is coherent to TED, EDGE Talks aims to provide a stage which knows no barrier between establishment and ambition.
       EDGE Talks promises to be an evening full of conversation and not lecture. It promises to be an episode filled with interaction which
        is what segregates it from a mundanely normal seminar or class.`,
      phase: [],
      guests: [
        {
          img: 't-4',
          name: 'General Bipin Rawat'
        },
          {
        img: 't-1',
        name: 'Rahul Dravid'
      },
      {
        img: 't-2',
        name: 'Gaur Gopal Das'
      },
      {
        img: 't-3',
        name: 'Subhash Chandra '
      }
    ],
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
