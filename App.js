import React, { useState, useEffect } from 'react';

// Add Tailwind CSS script
const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindScript);

// Set Inter font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const App = () => {
  // Data from the ESPCI 2025 document, structured by dates
  const espciData = {
    "2025-06-12": [
      {
        type: "Presentation",
        name: "Kelly Assouly",
        country: "Belgium",
        affiliation: "Cochlear",
        title: "Electrical stimulation through cochlear implant for tinnitus: scientific outcomes and patient needs",
        session: "P1.1 Cl and Tinnitus",
        time: "15:30 - 16:30",
        location: "Kuppelsaal"
      },
      {
        type: "Presentation",
        name: "Nader Nassif",
        country: "Italy",
        affiliation: "HCP/Researcher",
        title: "Bone Conduction Osia System in a Children: Our experience",
        session: "OC04.7 Acoustic implants I",
        time: "14:45 - 16:30",
        location: "Runder Saal"
      },
      {
        type: "Presentation",
        name: "Giorgio Lilli",
        country: "Italy",
        affiliation: "HCP/Researcher",
        title: "OSIA Bone Conduction Implant and BAHA Soft-Band Device in children: A Comparison of Audiological Performance and Subjective Satisfaction",
        session: "OC04.7 Acoustic implants I",
        time: "14:45 - 16:30",
        location: "Runder Saal"
      }
    ],
    "2025-06-13": [
      {
        type: "Presentation",
        name: "Emmanuel Mylanus",
        country: "Netherlands",
        affiliation: "HCP/Researcher",
        title: "Residual hearing preservation with the slim modiolar electrode; what is the best approach?",
        session: "RT4.1 Hearing Preservation",
        time: "9:30 AM - 10:30 AM",
        location: "Kuppelsaal"
      },
      {
        type: "Presentation",
        name: "Faisal Zawawi",
        country: "Saudi Arabia",
        affiliation: "HCP/Researcher",
        title: "Reducing Audiologist Dependency in Cochlear Implant Surgery: Insights from SmartNav Integration",
        session: "OC09.6 Surgical issues: impedance measurements",
        time: "9:30 AM - 10:30 AM",
        location: "Neuer Saal"
      },
      {
        type: "Presentation",
        name: "Matthew Smith",
        country: "UK",
        affiliation: "HCP/Researcher",
        title: "Intraoperative correction of cochlear implant electrode position using transimpedance matrix measurements",
        session: "OC09.6 Surgical issues: impedance measurements",
        time: "9:30 AM - 10:30 AM",
        location: "Neuer Saal"
      },
      {
        type: "Presentation",
        name: "Giedre Stripeikyte",
        country: "Switzerland",
        affiliation: "Cochlear",
        title: "Real-World Evidence Reveals Superior Outcomes of Bilateral Cochlear Implant Users: Insights from the Cochlear Family Survey Project reference: PMCF",
        session: "PS2.4 Outcome adults",
        time: "11:15 AM - 12:00 PM",
        location: "Blauer Saal"
      },
      {
        type: "Presentation",
        name: "Paola Incerti",
        country: "Australia",
        affiliation: "HCP/Researcher",
        title: "Clinical and Cost-Effectiveness of Upgrading Cochlear Implant Sound Processors in Older Adults: Outcomes from a Large Multicenter Study",
        session: "PS2.4 Outcome adults",
        time: "11:15 AM - 12:00 PM",
        location: "Blauer Saal"
      },
      {
        type: "Presentation",
        name: "Thomas Wesarg",
        country: "Germany",
        affiliation: "HCP/Researcher",
        title: "Effect of bilateral microphone directionality setting on speech understanding in multi-source noise for speech from different directions in bilateral Cl users Project reference: IIR-2002",
        session: "PS2.4 Outcome adults",
        time: "11:15 AM - 12:00 PM",
        location: "Blauer Saal"
      },
      {
        type: "Presentation",
        name: "Kim Veekmans",
        country: "UK",
        affiliation: "HCP/Researcher",
        title: "Remote Check follow up in for the paediatric cochlear implant population",
        session: "OC10.7 Telehealth",
        time: "11:15 AM - 12:45 PM",
        location: "Runder Saal"
      },
      {
        type: "Presentation",
        name: "Reem Badghaish",
        country: "Saudi Arabia",
        affiliation: "HCP/Researcher",
        title: "Evaluating Remote Check in Children with Cl",
        session: "OC10.7 Telehealth",
        time: "11:15 AM - 12:45 PM",
        location: "Runder Saal"
      },
      {
        type: "Presentation",
        name: "Astrid Van Wieringen",
        country: "Belgium",
        affiliation: "HCP/Researcher",
        title: "Longitudinal linguistic and auditory outcomes in children with single sided deafness and a cochlear implant Project reference: IIR-1065",
        session: "P2.1 SSD and CI in children",
        time: "14:00 - 15:00",
        location: "Kuppelsaal"
      },
      {
        type: "Presentation",
        name: "Eugen Kludt",
        country: "Germany",
        affiliation: "HCP/Researcher",
        title: "Personalisation of Cochlear Implantation by combination of fluoroscopy with intraoperative electrophysiological measurements Project reference: Cochlear-MΗΗ collaboration",
        session: "OC12.7 Surgical issues_ Electrophysiology",
        time: "14:36 PM",
        location: "Runder Saal"
      },
      {
        type: "Presentation",
        name: "Chris James",
        country: "France",
        affiliation: "Cochlear",
        title: "Channel crosstalk detected using ECAP measurements is associated with poorer speech perception in cochlear implant users Project reference: EMEA5798 Progress study",
        session: "PS3.1 Objective measurements",
        time: "18:15 - 19:00",
        location: "Kuppelsaal"
      },
      {
        type: "Presentation",
        name: "Conrad Riemann",
        country: "Germany",
        affiliation: "HCP/Researcher",
        title: "Intraoperatively test/retest variability of the eCAP thresholds in different cochlear implant users",
        session: "PS3.1 Objective measurements",
        time: "18:15 - 19:00",
        location: "Kuppelsaal"
      },
      {
        type: "Presentation",
        name: "Thierry Van den Abbeele",
        country: "France",
        affiliation: "HCP/Researcher",
        title: "A comparative study between perimodiolar and straight electrode arrays in cochlear implanted children.",
        session: "OC15.5 Electrodes: Selection and development",
        time: "18:15 - 19:00",
        location: "Leibniz Saal"
      },
      {
        type: "Presentation",
        name: "Thomas Rau",
        country: "Germany",
        affiliation: "HCP/Researcher",
        title: "Initial heating safety evaluation of a cochlear implant electrode array with electrically activated shape memory effect Project reference: Cochlear-MHH collaboration",
        session: "OC15.5 Electrodes: Selection and development",
        time: "18:35 - 20:00",
        location: "Leibniz Saal"
      }
    ],
    "2025-06-14": [
      {
        type: "Presentation",
        name: "Kerrie Plant",
        country: "Australia",
        affiliation: "Cochlear",
        title: "Examining performance variability in cochlear implant recipients",
        session: "IL5.4 Outcome Variability: What are the reasons?",
        time: "8:45 AM - 9:15 AM",
        location: "Blauer Saal"
      },
      {
        type: "Presentation",
        name: "Saji Maruthurkkara",
        country: "Australia",
        affiliation: "Cochlear",
        title: "When to Consider Aided Thresholds and Time on Air Abnormal: Insights from Big Data",
        session: "OC20.1 Mapping, Signal Processing and Outcomes",
        time: "12:15 PM - 1:30 PM",
        location: "Kuppelsaal"
      },
      {
        type: "Presentation",
        name: "Geert De Ceulaer",
        country: "Belgium",
        affiliation: "Cochlear",
        title: "Remote speech-in-quiet self-testing in cochlear implant recipients and hearing aid users using Mobile Research App with on-board self-scoring algorithm and proctoring tools Project reference: MuLiSSa",
        session: "PS4.7 Telehealth, future development",
        time: "12:15 PM - 1:30 PM",
        location: "Runder Saal"
      },
      {
        type: "Presentation",
        name: "Faisal Zawawi",
        country: "Saudi Arabia",
        affiliation: "HCP/Researcher",
        title: "Assessing auditory performance and Electrode Stability: A Study on Slim Straight and Slim Modiolar Cochlear Implants in Children",
        session: "OC20.3 Surgical issues: complications",
        time: "12:15 PM - 1:30 PM",
        location: "Bonatz Saal"
      },
      {
        type: "Presentation",
        name: "Tom Bertens",
        country: "Belgium",
        affiliation: "Cochlear",
        title: "Longitudinal patterns of Cl use and their link with speech outcomes in children Project reference: Cochlear-MΗΗ collaboration",
        session: "PS4.4 Outcome: children",
        time: "12:15 PM - 1:30 PM",
        location: "Blauer Saal"
      },
      {
        type: "Presentation",
        name: "Saji Maruthurkkara",
        country: "Australia",
        affiliation: "Cochlear",
        title: "Evidence supporting the clinical recommendation for adjusting Pulse Width, Rate and Maxima",
        session: "OC21.2 Mapping, Signal Processing and Outcomes II",
        time: "1:45 PM - 2:45 PM",
        location: "Roter Saal"
      }
    ],
    // Poster data is not assigned to specific dates in the document, so it can be displayed as a separate section
    "Posters": [
      {
        name: "Faisal Zawawi",
        country: "Saudi Arabia",
        affiliation: "HCP/Researcher",
        title: "Segmenting Cochlear Diameter: A Novel Approach to Understanding Cochlear Growth and Its Impact on Electrode Design",
        id: "P019"
      },
      {
        name: "Faisal Zawawi",
        country: "Saudi Arabia",
        affiliation: "HCP/Researcher",
        title: "A Systematic Review and Meta-analysis of Post-Cochlear Implant Vestibular Dysfunction: Round Window Vs. Standard Cochleostomy Approaches",
        id: "P165"
      },
      {
        name: "Faisal Zawawi",
        country: "Saudi Arabia",
        affiliation: "HCP/Researcher",
        title: "Cochlear duct length: Does age make a difference?",
        id: "P166"
      },
      {
        name: "Faisal Zawawi",
        country: "Saudi Arabia",
        affiliation: "HCP/Researcher",
        title: "Optimizing Rehabilitation in Pediatric Unilateral Sensorineural Hearing Loss: Comparing Cochlear Implants and Active Bone Conduction Implants",
        id: "PS2.5a"
      },
      {
        name: "Jaya Nichani",
        country: "UK",
        affiliation: "HCP/Researcher",
        title: "Listening effort and downstream effects due to hearing loss in children & young people (CYP)",
        id: "Poster"
      },
      {
        name: "Ellen Vermaete",
        country: "Belgium",
        affiliation: "HCP/Researcher",
        title: "The role of evidence-based remote technologies in future cochlear implant care Project reference: CLTD5764: INSPIRE",
        id: "Poster"
      },
      {
        name: "Nadine Buczak",
        country: "Germany",
        affiliation: "HCP/Researcher",
        title: "Neural Health Indicator in CI Users: The Role of Electrode Position and T-NRT Measurements Project reference: Cochlear-MHH collaboration",
        id: "Poster"
      }
    ]
  };

  // State to hold the selected date, defaulting to the start of the conference
  const [selectedDate, setSelectedDate] = useState(new Date('2025-06-12'));
  // State to hold events for the selected date
  const [events, setEvents] = useState(null);
  // Loading state (not strictly necessary with static data, but kept for consistency)
  const [loading, setLoading] = useState(false);
  // Error state (not strictly necessary with static data, but kept for consistency)
  const [error, setError] = useState(null);

  // Function to format date to YYYY-MM-DD string for data lookup
  const formatDateForDataLookup = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-11
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Function to fetch events from hardcoded data
  const fetchEventsFromData = (date) => {
    setLoading(true);
    setError(null);

    const formattedDate = formatDateForDataLookup(date);
    const dailyEvents = espciData[formattedDate] || [];
    const posterEvents = espciData["Posters"] || []; // Posters are always available

    // Group events into presentations and posters
    const groupedEvents = {
      presentations: dailyEvents.filter(event => event.type === "Presentation"),
      posters: posterEvents // All posters are displayed regardless of date
    };

    setEvents(groupedEvents);
    setLoading(false);
  };

  // Effect to fetch events on initial render and date change
  useEffect(() => {
    if (selectedDate) {
      fetchEventsFromData(selectedDate);
    }
  }, [selectedDate]); // Dependency on selectedDate

  // Handler for date change from HTML input
  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  // Component to display an event section
  const EventSection = ({ title, items }) => (
    <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b-2 border-indigo-300 pb-2">
        {title}
      </h3>
      {items && items.length > 0 ? (
        <ul className="list-none space-y-4 text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
              <p className="font-semibold text-indigo-700 text-lg">{item.title}</p>
              <p className="text-gray-600 text-base">
                <span className="font-medium">{item.name}</span> ({item.affiliation}, {item.country})
              </p>
              {item.session && <p className="text-sm text-gray-500">Session: {item.session}</p>}
              {item.time && <p className="text-sm text-gray-500">Time: {item.time}</p>}
              {item.location && <p className="text-sm text-gray-500">Location: {item.location}</p>}
              {item.id && <p className="text-sm text-gray-500">ID: {item.id}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No data available.</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-4 sm:p-6 font-inter">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <header className="bg-indigo-600 text-white p-6 text-center rounded-t-xl shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">What's Happening at ESPCI 2025?</h1>
          <p className="text-indigo-100 text-lg">Check the conference schedule!</p>
        </header>

        <main className="p-6 sm:p-8">
          <div className="mb-8 flex flex-col items-center">
            <label htmlFor="date-picker" className="block text-gray-700 text-lg font-medium mb-3">
              Select Conference Date:
            </label>
            <input
              type="date"
              id="date-picker"
              value={formatDateForDataLookup(selectedDate)}
              onChange={handleDateChange}
              min="2025-06-12" // Set minimum date to the start of the conference
              max="2025-06-14" // Set maximum date to the end of the conference
              className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center text-lg w-full max-w-xs"
            />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Events for {selectedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </h2>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-500"></div>
              <p className="ml-4 text-indigo-700 text-lg">Loading events...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}

          {events && !loading && (
            <div className="space-y-6">
              <EventSection title="Conference Presentations" items={events.presentations} />
              <EventSection title="Poster Sessions" items={events.posters} />
            </div>
          )}

          {!events && !loading && !error && (
            <div className="text-center text-gray-600 py-8">
              <p className="text-lg">Select a date to see the schedule!</p>
            </div>
          )}
        </main>

        <footer className="bg-indigo-700 text-white p-4 text-center text-sm rounded-b-xl">
          <p>&copy; 2025 What's Happening at ESPCI 2025? All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;


