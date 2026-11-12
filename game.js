"use strict";

const PART_LIBRARY = {
  panel: {
    id: "panel",
    name: "Side panel",
    remove: "Loosen the thumbscrews, then slide the panel toward the back of the case.",
    install: "Slide the panel forward until it sits flush, then tighten the thumbscrews by hand.",
    removeTip: "Keep the screws in a small container so they do not get lost.",
    installTip: "Check that no cables are sticking out before closing the case.",
    why: "The panel protects the hardware and closes the airflow path. It must come off first and go back on last.",
    purpose: "It shields components from dust and accidental bumps while helping the case direct air through its vents.",
    spec: "Removable case cover",
    fact: "A solid panel and a tempered-glass panel do the same basic job, but glass needs gentler handling."
  },
  gpu: {
    id: "gpu",
    name: "Graphics card",
    remove: "Unplug its power lead, release the slot latch and bracket screw, then lift straight out.",
    install: "Align the gold connector with the top PCIe x16 slot and press until the latch clicks.",
    removeTip: "Hold the card by its edges—not by the fans or gold connector.",
    installTip: "Reconnect the PCIe power lead after the card is firmly seated.",
    why: "A large graphics card blocks access to other parts, so removing it early makes the rest of the job easier.",
    purpose: "The GPU renders games, videos, 3D scenes, and other visual work. It can also accelerate some creative and computing tasks.",
    spec: "PCIe x16 expansion card",
    fact: "A dedicated graphics card has its own processor and usually its own memory, called VRAM."
  },
  ram: {
    id: "ram",
    name: "RAM",
    remove: "Open the clips at the ends of the memory modules, then lift each module straight up.",
    install: "Match the notch to the slot, then press both ends until the retention clips snap shut.",
    removeTip: "Use even pressure and avoid touching the gold contacts.",
    installTip: "Memory only fits one way. Never force a module against its notch.",
    why: "Memory modules are tall and delicate. Removing them before the cooler gives your hands more room.",
    purpose: "RAM holds the data and programs the computer is using right now so the processor can reach them quickly.",
    spec: "System memory modules",
    fact: "RAM is volatile memory: its contents disappear when the computer loses power."
  },
  cooler: {
    id: "cooler",
    name: "CPU cooler",
    remove: "Unplug the fan cable, loosen the screws diagonally, then gently twist and lift.",
    install: "Clean off old paste, add a small fresh drop, align the bracket, and tighten diagonally.",
    removeTip: "If the cooler feels stuck, a tiny twist can loosen old thermal paste. Do not pry.",
    installTip: "Tighten opposite screws a little at a time to spread pressure evenly.",
    why: "The cooler covers the processor. It must come off before the CPU can be reached.",
    purpose: "Its heat sink and fan move heat away from the processor so it can keep running at safe temperatures.",
    spec: "Air-cooled heatsink and fan",
    fact: "Thermal paste fills microscopic gaps between the CPU heat spreader and cooler; more paste is not always better."
  },
  cpu: {
    id: "cpu",
    name: "CPU",
    remove: "Lift the retention arm, hold the processor by its edges, and lift it straight out.",
    install: "Match the alignment triangle to the socket corner, lower gently, and close the retention arm.",
    removeTip: "Socket contacts are extremely delicate. Keep the CPU level and never drop it.",
    installTip: "A correctly aligned CPU drops into place with no pushing at all.",
    why: "With the cooler gone, the processor and its retention mechanism are accessible.",
    purpose: "The CPU executes instructions and calculations that coordinate almost everything the computer does.",
    spec: "Socketed central processor",
    fact: "The CPU and motherboard must have matching sockets, and the motherboard firmware must also support that processor."
  },
  ssd: {
    id: "ssd",
    name: "M.2 SSD",
    remove: "Remove the tiny retaining screw, lift the drive slightly, and slide it out of the slot.",
    install: "Slide the drive into the M.2 slot at an angle, lower it, and secure the retaining screw.",
    removeTip: "The retaining screw is tiny. Use the correct small screwdriver and keep it safe.",
    installTip: "Check whether the slot supports NVMe or SATA before choosing an M.2 drive.",
    why: "Removing small storage devices before the board prevents accidental damage while lifting the case hardware.",
    purpose: "The SSD stores the operating system, apps, games, and files even when power is off.",
    spec: "M.2 solid-state storage",
    fact: "SSDs use flash memory and have no moving parts. M.2 describes the connector shape, not the storage protocol."
  },
  optical: {
    id: "optical",
    name: "CD-ROM drive",
    remove: "Unplug the IDE ribbon and Molex power plug, remove the bay screws, and slide the drive forward.",
    install: "Slide the drive into the 5.25-inch bay, secure both sides, and reconnect IDE data and power.",
    removeTip: "Support the drive as you slide it out and avoid pulling on the ribbon cable.",
    installTip: "On a shared IDE cable, check the drive's master or slave jumper.",
    why: "The optical drive occupies a front bay and its wide cables can obstruct work inside a retro case.",
    purpose: "An optical drive reads CDs used for software, music, and data. Some later drives can also write discs.",
    spec: "IDE 5.25-inch optical drive",
    fact: "CD-ROM became a common way to distribute large programs before fast downloads and USB flash storage were widespread."
  },
  floppy: {
    id: "floppy",
    name: "Floppy disk drive",
    remove: "Unplug the floppy ribbon and small power connector, remove the bay screws, and slide it out.",
    install: "Seat the drive in the 3.5-inch bay, secure it, and reconnect the ribbon with pin 1 aligned.",
    removeTip: "The small four-pin power plug can be stubborn; pull the connector, never the wires.",
    installTip: "The striped edge of the ribbon marks pin 1. Check the drive and controller markings.",
    why: "The floppy drive and its ribbon cable need to be cleared before lifting out the other retro hardware.",
    purpose: "It reads and writes removable floppy diskettes, once commonly used for files, drivers, and boot disks.",
    spec: "1.44 MB 3.5-inch diskette drive",
    fact: "A classic 3.5-inch high-density floppy holds just 1.44 MB—far less than a single modern phone photo."
  },
  hdd: {
    id: "hdd",
    name: "Hard disk drive",
    remove: "Unplug the SATA data and power cables, remove the mounting screws, and slide the drive out.",
    install: "Secure the drive in its bay, then connect one SATA data cable and one SATA power cable.",
    removeTip: "Keep the drive level and avoid bumps; spinning platters and heads are sensitive to shock.",
    installTip: "Use screws on both sides where possible so vibration cannot move the drive.",
    why: "The hard drive's cables and mounting bracket should be removed before the motherboard and power supply.",
    purpose: "A hard drive stores files magnetically on spinning platters and keeps them when power is off.",
    spec: "SATA mechanical storage",
    fact: "Hard drives usually offer lots of storage for the price, while SSDs are quieter and have no moving parts."
  },
  fans: {
    id: "fans",
    name: "Case cooling fans",
    remove: "Unplug the fan or hub leads, support each fan, remove its screws, and lift the assembly free.",
    install: "Match the airflow arrows to the intended direction, secure the fans, and reconnect their power leads.",
    removeTip: "Keep fingers and loose cables away from fan blades, even at low voltage.",
    installTip: "Balance intake and exhaust, and leave room behind vents for air to move.",
    why: "Case fans and their cables should be clear before lifting the power supply or motherboard around them.",
    purpose: "Case fans bring in cooler air and expel warm air so every component benefits from steady airflow.",
    spec: "Case airflow assembly",
    fact: "Most fan frames have arrows showing blade rotation and airflow direction. More fans do not help if the airflow paths fight each other."
  },
  psu: {
    id: "psu",
    name: "Power supply",
    remove: "Unplug every internal cable, support the unit, remove its rear screws, and lift it out.",
    install: "Set the unit in its bay, secure the rear screws, and route its cables toward the board.",
    removeTip: "Never open a power supply's metal casing—even when it is unplugged.",
    installTip: "Support the PSU with one hand so it cannot drop onto other components.",
    why: "The PSU connects power to nearly everything. Its cables must be free before the motherboard can come out.",
    purpose: "It converts wall power into the low-voltage DC power used by computer components.",
    spec: "Enclosed DC power supply",
    fact: "A PSU can retain dangerous charge inside its casing. Replacing the whole unit is safer than opening it."
  },
  motherboard: {
    id: "motherboard",
    name: "Motherboard",
    remove: "Disconnect the remaining cables, remove the mounting screws, and lift the board evenly.",
    install: "Align the ports with the rear shield and the board with its standoffs, then add screws.",
    removeTip: "Keep the board flat and hold it by the edges. Put it on an anti-static surface.",
    installTip: "Tighten mounting screws until snug, not overly tight, and reconnect the tiny front-panel leads.",
    why: "Everything plugs into the motherboard, so it is the final piece removed and the foundation for reassembly.",
    purpose: "It connects the components and provides the sockets, slots, controllers, and pathways they use to communicate.",
    spec: "Main system circuit board",
    fact: "Brass standoffs keep the motherboard from touching the metal case and prevent electrical shorts."
  }
};

const BUILDS = {
  retro: {
    id: "retro",
    name: "Retro Socket 7 PC",
    shortName: "RETRO",
    year: "1995",
    level: "RETRO · GUIDED",
    difficulty: "GUIDED",
    model: "PX-95",
    chassis: "AT",
    boardLabel: "SOCKET 7 / PCI / ISA",
    psuLabel: "200W",
    description: "Explore jumpers, ribbon cables, diskettes, and a mechanical hard drive in a mid-1990s-inspired desktop.",
    cardDescription: "Socket 7 · IDE drives · Floppy disk",
    specs: ["PENTIUM-CLASS · SOCKET 7", "32 MB · 72-PIN EDO", "IDE HDD + CD-ROM", "200 W AT POWER"],
    note: "Retro systems vary greatly. Check CPU voltage and IDE jumpers, and never work on an AT mains switch or opened PSU.",
    parts: ["panel", "gpu", "ram", "cooler", "cpu", "optical", "floppy", "hdd", "psu", "motherboard"],
    compatibility: [
      "Match the processor to Socket 7, the chipset, and its required voltage.",
      "Use the correct 72-pin EDO SIMM type and capacity supported by the board.",
      "Set IDE master/slave jumpers correctly when devices share a ribbon cable.",
      "Align pin 1 on floppy and IDE ribbons; connectors are not all keyed alike.",
      "AT power arrangements can expose mains voltage. Leave switch and PSU repairs to qualified technicians."
    ],
    partInfo: {
      gpu: {
        name: "PCI graphics card",
        remove: "Remove the bracket screw, release any retaining clip, and lift the PCI card straight out.",
        install: "Align the card with a PCI slot, press down evenly, and secure its metal bracket.",
        installTip: "PCI and the smaller ISA slots are different. Check the card edge and slot length first.",
        purpose: "This dedicated graphics card turns digital images into a video signal for an external monitor.",
        spec: "PCI VGA graphics adapter",
        fact: "Many early 3D games used the CPU for much of their work; dedicated 3D accelerators became common later."
      },
      ram: {
        name: "EDO SIMM memory",
        remove: "Release the metal clips at both ends, tilt each SIMM, and lift it out without bending it.",
        install: "Insert the SIMM at an angle, then tilt it upright until both metal clips hold it.",
        installTip: "Check the notch and motherboard manual. Some boards require matched modules in pairs.",
        spec: "32 MB · 72-pin EDO SIMM",
        fact: "SIMMs usually have contacts on both sides connected together, unlike modern DIMMs with independent contacts."
      },
      cooler: {
        name: "CPU heatsink & fan",
        spec: "Compact Socket 7 air cooler",
        remove: "Unplug the fan lead, release the spring clip carefully, and lift the small heatsink away.",
        install: "Clean and renew the thermal interface, hook the clip onto the socket tabs, and reconnect the fan.",
        removeTip: "Socket tabs can be fragile. Use the correct clip tool and never lever against the CPU."
      },
      cpu: {
        name: "Socket 7 CPU",
        spec: "Pentium-class ceramic processor",
        remove: "Lift the socket lever, hold the ceramic processor by its edges, and lift it vertically.",
        install: "Confirm socket and voltage support, align pin 1, lower the CPU gently, and close the lever.",
        installTip: "Bent pins and incorrect voltage jumpers can damage retro hardware. Verify both before power-up."
      },
      hdd: {
        name: "IDE hard drive",
        remove: "Unplug the 40-pin IDE ribbon and Molex power plug, then remove the screws and slide out the drive.",
        install: "Set the required master/slave jumper, mount the drive, and connect the keyed power plug and pin-1-aligned ribbon.",
        removeTip: "Old hard drives are especially vulnerable to drops. Back up irreplaceable data before handling them.",
        installTip: "The red stripe on the IDE ribbon marks pin 1, usually nearest the power connector.",
        spec: "1.6 GB · 40-pin IDE storage",
        fact: "IDE ribbons carry data in parallel through many wires, unlike the smaller serial cables used by SATA."
      },
      psu: {
        name: "AT power supply",
        spec: "200 W · AT power unit",
        installTip: "AT motherboard power plugs and switches differ from ATX. Follow the specific board wiring exactly.",
        purpose: "It supplies DC voltages to the computer. In an AT system, the front switch may directly switch mains power.",
        fact: "AT systems generally did not use the same software-controlled power-on behavior associated with later ATX systems."
      },
      motherboard: {
        name: "Socket 7 motherboard",
        spec: "AT board · Socket 7 · PCI/ISA",
        install: "Align the board with the correct standoffs, secure it, and verify jumper settings before reconnecting cables.",
        installTip: "Do not add a standoff where the board has no mounting hole; it can short the board.",
        fact: "Jumpers on many retro boards configure settings that modern systems usually detect or expose in firmware menus."
      }
    },
    quiz: [
      {
        question: "Which retro component keeps files after power is switched off?",
        answers: ["EDO SIMM memory", "IDE hard drive", "CPU heatsink"],
        correct: 1,
        explanation: "The hard drive stores data magnetically on platters. RAM loses its contents without power."
      },
      {
        question: "What does the red stripe on an IDE ribbon identify?",
        answers: ["Pin 1", "The power switch", "The fastest drive"],
        correct: 0,
        explanation: "The stripe marks pin 1, helping align the cable with the drive and controller."
      },
      {
        question: "What must be checked before installing a Socket 7 processor?",
        answers: ["Fan color", "Disc capacity", "Socket and voltage support"],
        correct: 2,
        explanation: "The physical fit is not enough; retro CPUs can also require specific motherboard voltage jumpers."
      }
    ]
  },
  classic: {
    id: "classic",
    name: "Classic Gaming Tower",
    shortName: "CLASSIC",
    year: "2016",
    level: "CLASSIC · INTERMEDIATE",
    difficulty: "INTERMEDIATE",
    model: "PX-16",
    chassis: "ATX",
    boardLabel: "PX-16 / DDR4 / ATX",
    psuLabel: "650W",
    description: "Build a practical gaming PC with DDR4 memory, a compact M.2 SSD, and a high-capacity SATA hard drive.",
    cardDescription: "DDR4 · M.2 SSD + SATA HDD · Air cooling",
    specs: ["QUAD-CORE · LGA 1151", "16 GB · DDR4 DIMM", "M.2 NVMe + SATA HDD", "650 W ATX POWER"],
    note: "Check the exact CPU/chipset support list and M.2 slot protocol. This 2016-inspired configuration is illustrative.",
    parts: ["panel", "gpu", "ram", "cooler", "cpu", "ssd", "hdd", "psu", "motherboard"],
    compatibility: [
      "Match the LGA 1151 processor to a compatible chipset and firmware version.",
      "DDR4 DIMMs are not interchangeable with DDR3 or DDR5 modules.",
      "Confirm that the M.2 slot supports NVMe; some slots support only SATA M.2 drives.",
      "The SATA hard drive needs both a motherboard data cable and a PSU power cable.",
      "Check the 650 W PSU's connectors and the graphics card's power requirements."
    ],
    partInfo: {
      ram: { spec: "16 GB · DDR4 DIMM" },
      cpu: { spec: "Quad-core · LGA 1151 processor" },
      gpu: { spec: "PCIe 3.0 x16 graphics card" },
      ssd: { spec: "512 GB · M.2 NVMe SSD" },
      hdd: { spec: "2 TB · SATA hard drive" },
      psu: { spec: "650 W · ATX power supply" },
      motherboard: { spec: "ATX · LGA 1151 · DDR4" }
    },
    quiz: [
      {
        question: "Which component is fast, short-term working memory?",
        answers: ["DDR4 RAM", "SATA hard drive", "Power supply"],
        correct: 0,
        explanation: "RAM holds active programs and data for quick access, but it is cleared when power is lost."
      },
      {
        question: "What two connections does the SATA hard drive need?",
        answers: ["PCIe and fan power", "SATA data and SATA power", "IDE and Molex only"],
        correct: 1,
        explanation: "One cable carries data to the motherboard; the other supplies power from the PSU."
      },
      {
        question: "Does every M.2 slot support every M.2 SSD?",
        answers: ["Yes, the shape guarantees it", "No, NVMe and SATA support can differ", "Only if the RAM is DDR4"],
        correct: 1,
        explanation: "M.2 is a form factor. The motherboard manual identifies supported protocols and keying."
      }
    ]
  },
  advanced: {
    id: "advanced",
    name: "Advanced Creator PC",
    shortName: "ADVANCED",
    year: "2026",
    level: "ADVANCED · HANDS-ON",
    difficulty: "ADVANCED",
    model: "PX-26",
    chassis: "ATX",
    boardLabel: "PX-26 / DDR5 / PCIE",
    psuLabel: "850W",
    description: "Assemble an illustrative modern creator system with DDR5, NVMe storage, liquid cooling, and managed case airflow.",
    cardDescription: "DDR5 · NVMe · Liquid AIO · Case airflow",
    specs: ["MULTI-CORE · MODERN SOCKET", "64 GB · DDR5 DIMM", "2 TB · NVME SSD", "850 W · ATX 3.X"],
    note: "This is an illustrative advanced build, not a shopping list. Verify current vendor documentation, firmware, clearances, and connectors.",
    parts: ["panel", "gpu", "ram", "cooler", "cpu", "ssd", "fans", "psu", "motherboard"],
    compatibility: [
      "Match the CPU socket, chipset, and motherboard firmware support list.",
      "DDR5 modules are not backward-compatible with DDR4 motherboard slots.",
      "Confirm NVMe protocol support and heatsink clearance around the M.2 slot.",
      "Verify GPU length, radiator clearance, and cooler mounting hardware before assembly.",
      "Use the graphics card's specified power connector and a suitably rated PSU; do not improvise adapters."
    ],
    partInfo: {
      gpu: {
        name: "High-performance GPU",
        spec: "PCIe x16 · external GPU power",
        installTip: "Support a heavy card, seat it fully, and use only the power cable type specified by its maker.",
        fact: "Large modern cards may need several power connections and can put significant mechanical load on a slot."
      },
      ram: {
        name: "DDR5 memory",
        spec: "64 GB · DDR5 DIMM",
        installTip: "Use the motherboard's recommended slots for a two-module kit and verify the memory support list.",
        fact: "Memory capacity and transfer rate are different: capacity is how much fits; rate affects how quickly data moves."
      },
      cooler: {
        name: "Liquid CPU cooler",
        remove: "Unplug the pump and fans, loosen the water block evenly, then remove the radiator mounting screws.",
        install: "Attach the correct socket bracket, mount the radiator, apply paste, and tighten the water block diagonally.",
        removeTip: "Keep the radiator and tubes supported. Do not sharply bend, pinch, or pull the tubing.",
        installTip: "Connect the pump and fans to the headers specified by the cooler and motherboard manuals.",
        purpose: "An all-in-one liquid cooler moves processor heat through liquid to a radiator, where fans release it into the air.",
        spec: "All-in-one pump, tubes, and radiator",
        fact: "Liquid does not magically remove heat by itself; the radiator and its fans ultimately transfer that heat to the room."
      },
      cpu: { spec: "Multi-core · modern desktop socket" },
      ssd: {
        name: "NVMe M.2 SSD",
        spec: "2 TB · PCIe NVMe storage",
        installTip: "Remove the heatsink protective film if required, then secure the drive without over-tightening it.",
        fact: "NVMe is a protocol designed for flash storage connected through PCIe lanes."
      },
      psu: {
        name: "Modular power supply",
        spec: "850 W · ATX 3.x power supply",
        remove: "Unplug internal cables at both ends, support the unit, remove its rear screws, and lift it out.",
        install: "Connect only the modular cables supplied for this exact PSU, mount it, and route the required leads.",
        installTip: "Modular PSU cables are not universally interchangeable, even when a plug appears to fit.",
        fact: "The detachable plugs on a modular PSU improve cable management, but their PSU-side wiring varies by model."
      },
      motherboard: { spec: "ATX · DDR5 · PCIe · M.2 NVMe" }
    },
    quiz: [
      {
        question: "Where does an all-in-one liquid cooler release processor heat?",
        answers: ["Into the SSD", "At its radiator and fans", "Into the power supply"],
        correct: 1,
        explanation: "Liquid carries heat to the radiator; airflow through its fins transfers that heat to the surrounding air."
      },
      {
        question: "Can a DDR5 module be installed in a DDR4-only motherboard?",
        answers: ["Yes, with more force", "Yes, after removing RAM clips", "No, the generations are incompatible"],
        correct: 2,
        explanation: "DDR4 and DDR5 have different electrical requirements and physical keying. Never force a module."
      },
      {
        question: "What should determine the direction of a case fan?",
        answers: ["Its airflow arrows and intake/exhaust plan", "Whichever way hides the cable", "The direction of the GPU logo"],
        correct: 0,
        explanation: "Fan markings and a planned airflow path help cool air enter and warm air leave effectively."
      }
    ]
  }
};

const RETRO_ARTWORK = {
  gpu: '<rect x="147" y="247" width="329" height="84" fill="#356b51" stroke="#8da58f" stroke-width="4"/><rect x="136" y="253" width="14" height="91" fill="#b0b29f"/><path d="M139 264h8v17h-8zm0 27h8v17h-8z" fill="#48564d"/><rect x="161" y="258" width="300" height="59" fill="#47785a"/><path d="M181 270h49v30h-49zm70 0h49v30h-49zm70 0h49v30h-49z" fill="#1d302e" stroke="#829b81" stroke-width="3"/><path d="M190 277h31m-31 8h31m39-8h31m-31 8h31m39-8h31m-31 8h31" stroke="#53675b" stroke-width="3"/><rect x="395" y="267" width="46" height="28" fill="#c5b889"/><text x="399" y="285" fill="#4b5d52" font-size="9" font-family="monospace">VGA</text><path d="M180 333v10h237v-10" fill="#d6b859"/>',
  ram: '<rect x="405" y="83" width="27" height="148" fill="#50754b" stroke="#a2b382" stroke-width="3"/><rect x="440" y="83" width="27" height="148" fill="#50754b" stroke="#a2b382" stroke-width="3"/><path d="M409 96h19v25h-19zm0 36h19v25h-19zm0 36h19v25h-19zm35-72h19v25h-19zm0 36h19v25h-19zm0 36h19v25h-19z" fill="#27382c"/><path d="M405 83h27m8 0h27M409 224h19m16 0h19" stroke="#d7c67a" stroke-width="3"/><path d="M400 78h37v7h-37zm35 0h37v7h-37z" fill="#b5b69d"/>',
  cooler: '<rect x="277" y="119" width="99" height="98" fill="#8e9992" stroke="#c4cbb9" stroke-width="4"/><path d="M284 125v85m12-85v85m12-85v85m12-85v85m12-85v85m12-85v85m12-85v85" stroke="#536a68" stroke-width="5"/><circle cx="326" cy="167" r="39" fill="#374b4d" stroke="#98aaa1" stroke-width="4"/><path d="M326 159v-26h15v17l-8 12zm7 11 27-14v17l-14 12-14-6zm-7 10 15 27h-18l-12-15 6-14zm-8-11-27 14v-17l14-12 14 6z" fill="#7b8d76"/><rect x="316" y="157" width="21" height="21" fill="#c6b56f"/><path d="M275 207h-13v-23m113 23h14v-23" fill="none" stroke="#b9b9a2" stroke-width="5"/>',
  cpu: '<rect x="279" y="133" width="82" height="78" fill="#554d36" stroke="#aaa17a" stroke-width="4"/><rect x="288" y="142" width="64" height="60" fill="#a68d55"/><rect x="295" y="149" width="50" height="46" fill="#c8b47b" stroke="#e2d6a5" stroke-width="3"/><path d="M291 138v5m12-5v5m12-5v5m12-5v5m12-5v5m-48 62v5m12-5v5m12-5v5m12-5v5m12-5v5" stroke="#e8ce79" stroke-width="3"/><path d="M299 153h8v8h-8z" fill="#514b38"/><text x="300" y="177" fill="#5c573e" font-size="8" font-family="monospace">PENTIUM</text>'
};

const ADVANCED_ARTWORK = {
  gpu: '<rect x="147" y="247" width="329" height="84" fill="#273b4a" stroke="#8da5af" stroke-width="4"/><rect x="136" y="253" width="14" height="91" fill="#a4b2ae"/><path d="M139 264h8v17h-8zm0 27h8v17h-8zm0 27h8v17h-8z" fill="#314553"/><rect x="161" y="258" width="300" height="59" fill="#122630"/><g fill="#203e49" stroke="#62a1a0" stroke-width="3"><circle cx="210" cy="287" r="24"/><circle cx="311" cy="287" r="24"/><circle cx="412" cy="287" r="24"/></g><path d="M210 269v36m-18-18h36m83-18v36m-18-18h36m83-18v36m-18-18h36" stroke="#62e6d3" stroke-width="4"/><path d="M201 278h18v18h-18zm101 0h18v18h-18zm101 0h18v18h-18z" fill="#ffc857"/><path d="M180 333v10h237v-10" fill="#d6b859"/><path d="M403 239h61v9h-61z" fill="#62e6d3"/>',
  ram: '<rect x="405" y="83" width="27" height="148" fill="#234b4e" stroke="#62e6d3" stroke-width="3"/><rect x="440" y="83" width="27" height="148" fill="#234b4e" stroke="#62e6d3" stroke-width="3"/><path d="M410 94h17v21h-17zm0 30h17v21h-17zm0 30h17v21h-17zm35-60h17v21h-17zm0 30h17v21h-17zm0 30h17v21h-17z" fill="#132a33"/><path d="M410 233v7m7-7v7m7-7v7m26-7v7m7-7v7" stroke="#e6c967" stroke-width="3"/><path d="M400 78h37v7h-37zm35 0h37v7h-37z" fill="#62e6d3"/><path d="M405 78h27m13 0h17" stroke="#ffc857" stroke-width="3"/>',
  cooler: '<rect x="135" y="77" width="112" height="64" fill="#283d48" stroke="#7895a1" stroke-width="4"/><path d="M145 85h92v8h-92zm0 15h92v8h-92zm0 15h92v8h-92zm0 15h92v4h-92z" fill="#4e6b74"/><path d="M229 125C258 126 252 167 287 164M229 113C270 111 259 147 288 151" fill="none" stroke="#273c47" stroke-width="9"/><path d="M229 125C258 126 252 167 287 164M229 113C270 111 259 147 288 151" fill="none" stroke="#62a1a0" stroke-width="2"/><rect x="279" y="133" width="82" height="78" fill="#263e4a" stroke="#8da5af" stroke-width="4"/><circle cx="320" cy="172" r="28" fill="#16333c" stroke="#62e6d3" stroke-width="4"/><path d="M320 151v42m-21-21h42" stroke="#4b8b8e" stroke-width="4"/><rect x="310" y="162" width="20" height="20" fill="#ffc857"/><text x="151" y="104" fill="#b5d4d0" font-size="8" font-family="monospace">AIO</text>',
  ssd: '<rect x="350" y="218" width="132" height="41" fill="#253d47" stroke="#8da5af" stroke-width="3"/><path d="M358 225h105v6H358zm0 12h105v6H358zm0 12h105v3H358z" fill="#42616a"/><path d="M473 224v29" stroke="#62e6d3" stroke-width="4"/><circle cx="357" cy="238" r="3" fill="#d8dbc1"/><text x="386" y="241" fill="#c1d3ce" font-size="9" font-family="monospace">NVME</text>'
};

BUILDS.retro.artwork = RETRO_ARTWORK;
BUILDS.advanced.artwork = ADVANCED_ARTWORK;

const ALL_PART_IDS = Object.keys(PART_LIBRARY);
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (id) => document.getElementById(id);

const elements = {
  phaseLabel: $("phaseLabel"),
  progressLabel: $("progressLabel"),
  progressCount: $("progressCount"),
  progressTrack: $("progressTrack"),
  progressFill: $("progressFill"),
  score: $("score"),
  timer: $("timer"),
  actionBadge: $("actionBadge"),
  workbench: $("workbench"),
  workbench3d: $("workbench3d"),
  scene3d: $("scene3d"),
  viewModeButton: $("viewModeButton"),
  freeModeButton: $("freeModeButton"),
  hardwareStatus: $("hardwareStatus"),
  caseViewControls: $("caseViewControls"),
  xrayButton: $("xrayButton"),
  sidePanelButton: $("sidePanelButton"),
  zoomOutButton: $("zoomOutButton"),
  zoomInButton: $("zoomInButton"),
  zoomLabel: $("zoomLabel"),
  resetViewButton: $("resetViewButton"),
  viewHelp: $("viewHelp"),
  stepNumber: $("stepNumber"),
  instructionTitle: $("instructionTitle"),
  instructionText: $("instructionText"),
  tipText: $("tipText"),
  detailButton: $("detailButton"),
  detailText: $("detailText"),
  hintButton: $("hintButton"),
  trayCount: $("trayCount"),
  trayHelp: $("trayHelp"),
  partsTray: $("partsTray"),
  buildName: $("buildName"),
  buildYear: $("buildYear"),
  buildDescription: $("buildDescription"),
  buildSpecs: $("buildSpecs"),
  buildSelector: $("buildSelector"),
  selectedBuildSpecs: $("selectedBuildSpecs"),
  startButton: $("startButton"),
  introFootnote: $("introFootnote"),
  closeIntroButton: $("closeIntroButton"),
  introModal: $("introModal"),
  phaseModal: $("phaseModal"),
  guideModal: $("guideModal"),
  quizModal: $("quizModal"),
  helpModal: $("helpModal"),
  phaseModalEyebrow: $("phaseModalEyebrow"),
  phaseModalTitle: $("phaseModalTitle"),
  phaseModalText: $("phaseModalText"),
  phaseModalButton: $("phaseModalButton"),
  completionQuizButton: $("completionQuizButton"),
  completionBuildButton: $("completionBuildButton"),
  achievementIcon: $("achievementIcon"),
  completionStats: $("completionStats"),
  guideBuildLabel: $("guideBuildLabel"),
  guidePartList: $("guidePartList"),
  guidePartIcon: $("guidePartIcon"),
  guidePartSpec: $("guidePartSpec"),
  guidePartName: $("guidePartName"),
  guidePartPurpose: $("guidePartPurpose"),
  guidePartFact: $("guidePartFact"),
  guidePartCare: $("guidePartCare"),
  compatibilityList: $("compatibilityList"),
  quizBuildLabel: $("quizBuildLabel"),
  quizProgress: $("quizProgress"),
  quizScore: $("quizScore"),
  quizQuestion: $("quizQuestion"),
  quizAnswers: $("quizAnswers"),
  quizFeedback: $("quizFeedback"),
  quizNextButton: $("quizNextButton"),
  helpSequenceTitle: $("helpSequenceTitle"),
  helpSequence: $("helpSequence"),
  helpBuildNote: $("helpBuildNote"),
  toast: $("toast"),
  soundButton: $("soundButton"),
  soundIcon: $("soundIcon"),
  soundLabel: $("soundLabel")
};

const svgParts = new Map(ALL_PART_IDS.map((id) => [id, $(`part-${id}`)]));
const svgSlots = new Map(ALL_PART_IDS.map((id) => [id, document.querySelector(`[data-slot="${id}"]`)]));
const defaultArtwork = new Map([...svgParts].map(([id, element]) => [id, element.innerHTML]));

const SCENE_PARTS = {
  motherboard: { x: 126, y: 67, w: 370, h: 279, d: 12, z: -6, color: "#25675b", top: "#62a47e", side: "#173f3b" },
  psu: { x: 106, y: 352, w: 192, h: 82, d: 68, z: 15, color: "#3a4854", top: "#8797a3", side: "#26343e" },
  cpu: { x: 279, y: 133, w: 82, h: 78, d: 9, z: 6, color: "#a9b8b2", top: "#e2e8cf", side: "#637c7d" },
  ssd: { x: 354, y: 222, w: 124, h: 33, d: 9, z: 6, color: "#297568", top: "#7db897", side: "#183f3c" },
  cooler: { x: 259, y: 99, w: 134, h: 139, d: 52, z: 27, color: "#415763", top: "#9bb0b8", side: "#263b47" },
  ram: { x: 400, y: 78, w: 72, h: 163, d: 13, z: 8, color: "#318674", top: "#8bc4a0", side: "#17363b" },
  gpu: { x: 136, y: 239, w: 340, h: 105, d: 36, z: 19, color: "#344e5d", top: "#8ca4ad", side: "#1b303c" },
  optical: { x: 499, y: 62, w: 68, h: 43, d: 56, z: 15, color: "#aaa88f", top: "#ded9bd", side: "#6d7063" },
  floppy: { x: 499, y: 112, w: 68, h: 43, d: 50, z: 15, color: "#b9b49a", top: "#ded9bd", side: "#777b6c" },
  hdd: { x: 496, y: 164, w: 73, h: 61, d: 45, z: 15, color: "#8999a0", top: "#c0ccd0", side: "#536b75" },
  fans: { x: 501, y: 67, w: 64, h: 259, d: 24, z: 15, color: "#172c37", top: "#5e7d88", side: "#0f222c" },
  panel: { x: 66, y: 40, w: 542, h: 390, d: 6, z: 70, color: "rgba(54, 88, 107, 0.94)", top: "#8fa9b5", side: "#36586b" }
};

function screwPieces(points, z) {
  return points.map(([x, y]) => ({ x, y, w: 10, h: 10, d: 4, z, color: "#a9b8b2", top: "#e2e8cf", side: "#637c7d" }));
}

function wirePath(path, z, color, connectors, width = 5) {
  const connectorPieces = connectors.map(([x, y, frontZ = z + 4]) => {
    const depth = Math.max(2, frontZ - z);
    return {
      x: x - 7, y: y - 5, w: 14, h: 10, d: depth, z: frontZ - depth / 2,
      color: "#152734", top: color, side: "#243b47", connector: true,
      svg: `<svg class="connector-svg" viewBox="0 0 14 10" aria-hidden="true"><rect x="3" y="3" width="8" height="4" rx="1" fill="${color}"/></svg>`
    };
  });
  return {
    x: 0, y: 0, w: 680, h: 500, d: 1, z, color, connectorPieces,
    svg: `<svg class="wire-svg" viewBox="0 0 680 500" aria-hidden="true" draggable="false">
      <path class="wire-shadow" d="${path}" fill="none" stroke="#061019" stroke-width="${width + 3}" stroke-linecap="round" stroke-linejoin="round" opacity="0.65"/>
      <path class="wire-visible" d="${path}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="wire-highlight" d="${path}" fill="none" stroke="#fff" stroke-width="${Math.max(1, width * 0.22)}" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>
      <path class="wire-path-hit" d="${path}" fill="none" stroke="transparent" stroke-width="${Math.max(16, width + 8)}" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  };
}

const HARDWARE = {
  "panel-screws": { type: "screw", label: "side-panel thumbscrews", parts: ["panel"], pieces: screwPieces([[82, 54], [590, 54], [82, 414], [590, 414]], 76) },
  "gpu-screw": { type: "screw", label: "graphics-card bracket screw", parts: ["gpu"], pieces: screwPieces([[140, 252]], 41) },
  "cooler-screws": { type: "screw", label: "cooler mounting screws", parts: ["cooler"], pieces: screwPieces([[264, 104], [382, 104], [264, 226], [382, 226]], 56) },
  "ssd-screw": { type: "screw", label: "M.2 retaining screw", parts: ["ssd"], pieces: screwPieces([[463, 226]], 13) },
  "motherboard-screws": { type: "screw", label: "motherboard mounting screws", parts: ["motherboard"], pieces: screwPieces([[137, 78], [478, 78], [137, 327], [478, 327]], 4) },
  "psu-screws": { type: "screw", label: "power-supply screws", parts: ["psu"], pieces: screwPieces([[112, 358], [282, 358]], 52) },
  "optical-screws": { type: "screw", label: "CD-ROM mounting screws", parts: ["optical"], pieces: screwPieces([[503, 66], [558, 100]], 46) },
  "floppy-screws": { type: "screw", label: "floppy-drive mounting screws", parts: ["floppy"], pieces: screwPieces([[503, 116], [558, 150]], 43) },
  "hdd-screws": { type: "screw", label: "hard-drive mounting screws", parts: ["hdd"], pieces: screwPieces([[500, 169], [560, 218]], 41) },
  "fan-screws": { type: "screw", label: "case-fan screws", parts: ["fans"], pieces: screwPieces([[505, 72], [556, 72], [505, 316], [556, 316]], 30) },
  "motherboard-power": { type: "wire", label: "motherboard power lead", parts: ["psu", "motherboard"], pieces: [wirePath("M280 385 C390 420 570 400 578 350 C582 330 548 325 485 325", 2, "#ffc857", [[280, 385, 49], [485, 325, 3]], 6)] },
  "cpu-power": { type: "wire", label: "CPU power lead", builds: ["classic", "advanced"], parts: ["psu", "motherboard"], pieces: [wirePath("M150 360 C112 348 102 320 102 270 L102 105 Q102 90 118 90 L150 90", 2, "#e6c967", [[150, 360, 49], [150, 90, 3]], 5)] },
  "pcie-power": { type: "wire", label: "graphics-card power lead", builds: ["classic", "advanced"], parts: ["gpu", "psu"], pieces: [wirePath("M230 375 C330 420 485 405 485 340 L485 285 Q485 270 470 270 L450 270", 2, "#ff7b72", [[230, 375, 49], [450, 270, 37]], 5)] },
  "fan-wire": { type: "wire", label: "CPU fan cable", parts: ["cooler", "motherboard"], pieces: [wirePath("M345 110 C345 88 370 88 390 85", 2, "#62e6d3", [[345, 110, 53], [390, 85, 3]], 4)] },
  "sata-data": { type: "wire", label: "SATA data cable", builds: ["classic"], parts: ["hdd", "motherboard"], pieces: [wirePath("M485 230 C492 230 492 205 500 205 L520 190", 2, "#a4e635", [[485, 230, 3], [520, 190, 37.5]], 4)] },
  "sata-power": { type: "wire", label: "SATA power cable", builds: ["classic"], parts: ["hdd", "psu"], pieces: [wirePath("M240 390 C360 425 570 400 578 330 L578 240 Q578 220 562 220 L520 205", 2, "#ffc857", [[240, 390, 49], [520, 205, 37.5]], 5)] },
  "case-fan-wire": { type: "wire", label: "case-fan power lead", builds: ["advanced"], parts: ["fans", "psu"], pieces: [wirePath("M530 285 C570 300 578 330 565 355 S450 410 280 385", 2, "#62e6d3", [[530, 285, 27], [280, 385, 49]], 4)] },
  "ide-data": { type: "wire", label: "IDE ribbon cable", builds: ["retro"], parts: ["optical", "hdd", "motherboard"], pieces: [wirePath("M485 230 C500 230 515 220 515 205 L515 85", 2, "#a9b8b2", [[485, 230, 3], [515, 190, 37.5], [515, 85, 43]], 12)] },
  "floppy-data": { type: "wire", label: "floppy ribbon cable", builds: ["retro"], parts: ["floppy", "motherboard"], pieces: [wirePath("M485 160 C493 160 495 140 505 140 L515 130", 2, "#a9b8b2", [[485, 160, 3], [515, 130, 40]], 9)] },
  "molex-power": { type: "wire", label: "Molex power lead", builds: ["retro"], parts: ["optical", "floppy", "hdd", "psu"], pieces: [wirePath("M250 380 C380 420 550 390 550 320 L550 85", 2, "#ff7b72", [[250, 380, 49], [550, 190, 37.5], [550, 130, 40], [550, 85, 43]], 6)] }
};

const sceneParts = new Map();
const sceneSlots = new Map();
const sceneHardware = new Map();
const viewState = {
  mode: "2d",
  yaw: -24,
  pitch: -18,
  zoom: 1,
  xray: false,
  sideRemoved: false,
  dragging: false,
  pointerId: null,
  lastX: 0,
  lastY: 0,
  didDrag: false
};

let activeBuildId = "classic";
let pendingBuildId = "classic";
let selectedGuidePart = "panel";
let guideReturnFocus = null;
let state = createInitialState();
let timerHandle = null;
let actionHandle = null;
let phaseHandle = null;
let toastHandle = null;
let soundEnabled = true;
let audioContext = null;
let modalAction = null;
let quizState = createQuizState();

function createInitialState() {
  return {
    started: false,
    complete: false,
    freeMode: false,
    hardwareRemoved: new Set(),
    paused: false,
    locked: false,
    phase: "disassembly",
    step: 0,
    score: 0,
    elapsed: 0,
    hints: 0,
    mistakes: 0,
    selectedPart: null,
    detailOpen: false,
    removed: new Set(),
    removalOrder: []
  };
}

function createQuizState() {
  return { index: 0, correct: 0, answered: false, finished: false, returnToPhase: false };
}

function activeBuild() {
  return BUILDS[activeBuildId];
}

function partIds() {
  return activeBuild().parts;
}

function activeParts() {
  return partIds().map(partById);
}

function buildOrder() {
  return [...partIds()].reverse();
}

function partById(id) {
  return { ...PART_LIBRARY[id], ...(activeBuild().partInfo[id] || {}) };
}

function currentPart() {
  if (state.freeMode) return null;
  const ids = state.phase === "disassembly" ? partIds() : buildOrder();
  if (state.step >= ids.length) return null;
  return partById(ids[state.step]);
}

function partIcon(id) {
  const icons = {
    panel: '<rect x="15" y="5" width="66" height="52" fill="#36586b" stroke="#8fa9b5" stroke-width="3"/><rect x="22" y="12" width="29" height="20" fill="#1b3443"/><path d="M25 15h4v4h-4zm9 0h4v4h-4zm9 0h4v4h-4zm-18 9h4v4h-4zm9 0h4v4h-4zm9 0h4v4h-4z" fill="#698a99"/><path d="M62 15h12v4H62zm0 9h12v4H62zm0 9h12v4H62z" fill="#162f3d"/><path d="M71 39h4v12h-4z" fill="#a2b3b9"/>',
    gpu: '<rect x="5" y="14" width="86" height="36" fill="#344e5d" stroke="#8ca4ad" stroke-width="3"/><path d="M5 19H1v40h7v-9" fill="#b0bdba"/><circle cx="29" cy="32" r="12" fill="#172c37" stroke="#5b9295" stroke-width="3"/><circle cx="67" cy="32" r="12" fill="#172c37" stroke="#5b9295" stroke-width="3"/><path d="M29 23v18m-9-9h18m29-9v18m-9-9h18" stroke="#62a1a0" stroke-width="3"/><path d="M16 52v6h55v-6" fill="#e0bd55"/><path d="M42 18h13v7H42z" fill="#ffc857"/>',
    ram: '<rect x="21" y="3" width="22" height="55" fill="#318674" stroke="#8bc4a0" stroke-width="3"/><rect x="52" y="3" width="22" height="55" fill="#318674" stroke="#8bc4a0" stroke-width="3"/><path d="M26 9h12v11H26zm0 17h12v11H26zm0 17h12v10H26zm31-34h12v11H57zm0 17h12v11H57zm0 17h12v10H57z" fill="#17363b"/><path d="M25 59v4m7-4v4m7-4v4m16-4v4m7-4v4m7-4v4" stroke="#e6c967" stroke-width="3"/>',
    cooler: '<rect x="16" y="3" width="64" height="58" fill="#415763" stroke="#9bb0b8" stroke-width="4"/><rect x="23" y="10" width="50" height="44" fill="#172b35"/><circle cx="48" cy="32" r="19" fill="#29444f" stroke="#5e7d88" stroke-width="3"/><path d="M48 29V15h9v10l-5 6zm4 5 14-7v10l-9 6-7-4zm-4 5 7 14H44l-6-10 5-6zm-4-5-15 8V27l9-6 8 5z" fill="#62a1a0"/><rect x="42" y="26" width="12" height="12" fill="#ffc857"/>',
    cpu: '<path d="M26 7V1m11 6V1m11 6V1m11 6V1m11 6V1M26 63v-6m11 6v-6m11 6v-6m11 6v-6m11 6v-6M18 16h-6m6 11h-6m6 11h-6m6 11h-6m72-33h6m-6 11h6m-6 11h6m-6 11h6" stroke="#e6c967" stroke-width="3"/><rect x="17" y="7" width="62" height="50" fill="#a9b8b2" stroke="#e2e8cf" stroke-width="4"/><rect x="25" y="15" width="46" height="34" fill="#637c7d"/><path d="M28 18h9v9h-9z" fill="#ffc857"/><path d="M39 33h22v8H39z" fill="#2c474c"/>',
    ssd: '<rect x="5" y="18" width="86" height="29" fill="#297568" stroke="#8bc4a0" stroke-width="3"/><path d="M13 24h21v17H13zm28 0h21v17H41zm28 0h13v17H69z" fill="#17343a"/><path d="M86 23v19" stroke="#e6c967" stroke-width="4"/><circle cx="10" cy="32" r="3" fill="#d8dbc1"/>',
    optical: '<rect x="5" y="15" width="86" height="36" fill="#aaa88f" stroke="#ded9bd" stroke-width="3"/><path d="M12 22h71v7H12z" fill="#2e3838"/><rect x="13" y="36" width="39" height="8" fill="#747c72"/><circle cx="77" cy="40" r="5" fill="#d9d6b9"/><text x="55" y="43" fill="#e0ddc4" font-size="7" font-family="monospace">CD</text>',
    floppy: '<rect x="8" y="15" width="80" height="36" fill="#b9b49a" stroke="#ded9bd" stroke-width="3"/><path d="M16 23h55v6H16z" fill="#303838"/><rect x="75" y="21" width="6" height="11" fill="#747b70"/><rect x="17" y="38" width="22" height="6" fill="#888b79"/><circle cx="76" cy="41" r="3" fill="#a4e635"/>',
    hdd: '<rect x="13" y="6" width="70" height="53" fill="#8999a0" stroke="#c0ccd0" stroke-width="3"/><rect x="20" y="12" width="56" height="34" fill="#c4cbc5"/><circle cx="40" cy="29" r="13" fill="#9dadae" stroke="#71878b" stroke-width="2"/><circle cx="40" cy="29" r="4" fill="#4d636b"/><path d="M58 18h12v5H58zm0 10h12v5H58zm0 10h12v5H58z" fill="#72878a"/><path d="M22 51h51" stroke="#3b515b" stroke-width="4"/>',
    fans: '<rect x="8" y="4" width="80" height="57" fill="#172c37" stroke="#5e7d88" stroke-width="3"/><g fill="#29444f" stroke="#62a1a0" stroke-width="3"><circle cx="29" cy="32" r="19"/><circle cx="67" cy="32" r="19"/></g><path d="M29 17v30m-15-15h30m23-15v30M52 32h30" stroke="#62e6d3" stroke-width="4"/><path d="M23 26h12v12H23zm38 0h12v12H61z" fill="#ffc857"/>',
    psu: '<rect x="7" y="7" width="82" height="50" fill="#3a4854" stroke="#91a1ab" stroke-width="4"/><circle cx="36" cy="32" r="19" fill="#1a2c36" stroke="#617b88" stroke-width="3"/><path d="M36 15v34M19 32h34M24 20l24 24m0-24L24 44" stroke="#607e8a" stroke-width="3"/><path d="M63 17h18v10H63z" fill="#ffc857"/><path d="M63 36h5v5h-5zm9 0h5v5h-5zm9 0h5v5h-5z" fill="#14252e"/>',
    motherboard: '<rect x="12" y="3" width="72" height="58" fill="#25675b" stroke="#8bc4a0" stroke-width="3"/><path d="M20 10h23v14H20zm37 0h6v29h-6zm6 0h13v8H63zM20 44h56v6H20zM20 53h42v4H20z" fill="#17363b"/><rect x="42" y="11" width="16" height="17" fill="#a9b8b2"/><path d="M22 32h15v6H22z" fill="#ffc857"/><path d="M17 8h3v3h-3zm59 44h3v3h-3z" fill="#d8dbc1"/>'
  };
  return `<svg viewBox="0 0 96 64" shape-rendering="crispEdges" aria-hidden="true">${icons[id]}</svg>`;
}

function modelBlock(x, y, width, height, depth, front, top, side, stroke = "#8da5af") {
  const right = x + width;
  return `
    <polygon points="${x},${y} ${x + depth},${y - depth} ${right + depth},${y - depth} ${right},${y}" fill="${top}" stroke="${stroke}" stroke-width="2"/>
    <polygon points="${right},${y} ${right + depth},${y - depth} ${right + depth},${y + height - depth} ${right},${y + height}" fill="${side}" stroke="${stroke}" stroke-width="2"/>
    <rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${front}" stroke="${stroke}" stroke-width="2"/>`;
}

function partModel(id) {
  const build = activeBuild();
  let model;

  if (id === "panel") {
    model = `${modelBlock(70, 30, 150, 115, 18, "#36586b", "#638493", "#203b4b")}
      <rect x="84" y="44" width="122" height="87" fill="#1b3443" stroke="#6e91a0" stroke-width="2"/>
      <path d="M96 56h55v38H96z" fill="#294a5a" stroke="#8ba8b2" stroke-width="2"/>
      <path d="M101 61h8v8h-8zm14 0h8v8h-8zm14 0h8v8h-8zm-28 14h8v8h-8zm14 0h8v8h-8zm14 0h8v8h-8z" fill="#142e3c"/>
      <path d="M166 55h28v5h-28zm0 12h28v5h-28zm0 12h28v5h-28z" fill="#102936"/>
      <rect x="186" y="88" width="7" height="29" fill="#b0c2c7"/>
      <path d="M75 35h5v5h-5zm120 0h5v5h-5zM75 130h5v5h-5zm120 0h5v5h-5z" fill="#d3ddda"/>`;
  } else if (id === "gpu") {
    const retro = activeBuildId === "retro";
    const advanced = activeBuildId === "advanced";
    const fanXs = advanced ? [84, 153, 222] : retro ? [] : [105, 198];
    const fans = fanXs.map((x) => `<circle cx="${x}" cy="94" r="25" fill="#172c37" stroke="#62a1a0" stroke-width="3"/><path d="M${x} 75v38M${x - 19} 94h38M${x - 13} 81l26 26m0-26-26 26" stroke="#5f9297" stroke-width="3"/><circle cx="${x}" cy="94" r="7" fill="#ffc857"/>`).join("");
    const chips = retro ? `<path d="M77 75h48v37H77zm65 0h48v37h-48zm65 0h35v37h-35z" fill="#1d302e" stroke="#829b81" stroke-width="2"/><path d="M83 82h36m-36 8h36m-36 8h36m29-16h36m-36 8h36m-36 8h36" stroke="#53675b" stroke-width="3"/>` : fans;
    model = `${modelBlock(39, 60, 226, 69, 20, retro ? "#47785a" : "#263e4b", retro ? "#71a07d" : "#52707e", retro ? "#294e3b" : "#172c37")}
      <rect x="29" y="57" width="12" height="83" fill="#b8c3bf" stroke="#e0e6dc" stroke-width="2"/>
      <path d="M32 67h6v16h-6zm0 26h6v16h-6zm0 26h6v12h-6z" fill="#40515a"/>
      ${chips}
      <path d="M69 131v11h155v-11" fill="#dfbc55" stroke="#f4d77e" stroke-width="2"/>
      <path d="M82 132v8m14-8v8m14-8v8m14-8v8m14-8v8m14-8v8m14-8v8m14-8v8m14-8v8" stroke="#8e7134" stroke-width="2"/>
      <rect x="235" y="48" width="29" height="10" fill="${advanced ? "#62e6d3" : "#172832"}"/>`;
  } else if (id === "ram") {
    const retro = activeBuildId === "retro";
    const color = retro ? "#50754b" : activeBuildId === "advanced" ? "#234b4e" : "#318674";
    model = `${modelBlock(83, 28, 54, 116, 12, color, "#79a991", "#203f3d")}
      ${modelBlock(157, 36, 54, 108, 12, color, "#79a991", "#203f3d")}
      <path d="M92 43h35v21H92zm0 29h35v21H92zm0 29h35v21H92zm74-57h35v21h-35zm0 29h35v21h-35zm0 29h35v21h-35z" fill="#172f35" stroke="#729187" stroke-width="2"/>
      <path d="M91 145v12m10-12v12m10-12v12m10-12v12m10-12v12m35-1v12m10-12v12m10-12v12m10-12v12m10-12v12" stroke="#e6c967" stroke-width="4"/>
      <path d="M84 28h52m22 8h52" stroke="${activeBuildId === "advanced" ? "#62e6d3" : "#c4d4c8"}" stroke-width="5"/>`;
  } else if (id === "cooler" && activeBuildId === "advanced") {
    model = `${modelBlock(30, 38, 137, 61, 17, "#283d48", "#5c7985", "#172c37")}
      <path d="M42 48h113M42 58h113M42 88h113" stroke="#66828b" stroke-width="3"/>
      <circle cx="67" cy="69" r="21" fill="#17303a" stroke="#62a1a0" stroke-width="3"/><circle cx="130" cy="69" r="21" fill="#17303a" stroke="#62a1a0" stroke-width="3"/>
      <path d="M67 52v34m-17-17h34m46-17v34m-17-17h34" stroke="#62e6d3" stroke-width="3"/>
      <path d="M157 84C190 82 177 121 211 120M157 94C183 97 178 132 211 130" fill="none" stroke="#101f29" stroke-width="10"/>
      <path d="M157 84C190 82 177 121 211 120M157 94C183 97 178 132 211 130" fill="none" stroke="#62a1a0" stroke-width="2"/>
      ${modelBlock(205, 92, 65, 57, 15, "#263e4a", "#567482", "#172c37")}
      <circle cx="237" cy="120" r="21" fill="#16333c" stroke="#62e6d3" stroke-width="3"/><circle cx="237" cy="120" r="7" fill="#ffc857"/>`;
  } else if (id === "cooler") {
    model = `${modelBlock(84, 30, 128, 120, 21, "#334b57", "#718993", "#20343f")}
      <path d="M95 40v100m13-100v100m13-100v100m13-100v100m13-100v100m13-100v100m13-100v100m13-100v100" stroke="#78909a" stroke-width="4"/>
      <circle cx="148" cy="90" r="47" fill="#172b35" stroke="#91a9b2" stroke-width="3"/>
      <path d="M148 82V48h17v20l-9 15zm7 13 34-17v20l-17 13-17-7zm-7 11 17 33h-20l-13-17 7-16zm-8-13-34 17V90l17-13 17 7z" fill="#62a1a0"/>
      <circle cx="148" cy="90" r="12" fill="#ffc857"/>
      <path d="M82 139H67v-24m147 24h14v-24" fill="none" stroke="#c1cbc5" stroke-width="5"/>`;
  } else if (id === "cpu") {
    const retro = activeBuildId === "retro";
    model = `${modelBlock(91, 43, 119, 99, 20, retro ? "#b59a60" : "#a9b8b2", retro ? "#d5c18a" : "#e2e8cf", retro ? "#75623f" : "#637c7d")}
      <rect x="103" y="55" width="95" height="75" fill="${retro ? "#c8b47b" : "#637c7d"}" stroke="#e2e8cf" stroke-width="3"/>
      <path d="M104 34V22m15 12V22m15 12V22m15 12V22m15 12V22m15 12V22m15 12V22M104 151v12m15-12v12m15-12v12m15-12v12m15-12v12m15-12v12m15-12v12M80 58H68m12 16H68m12 16H68m12 16H68m12 16H68m12 16H68M221 58h12m-12 16h12m-12 16h12m-12 16h12m-12 16h12m-12 16h12" stroke="#e6c967" stroke-width="3"/>
      <path d="M111 63h13v13h-13z" fill="#ffc857"/>
      <text x="150" y="99" fill="${retro ? "#514b38" : "#d8e4dc"}" font-size="14" font-family="monospace" text-anchor="middle">${retro ? "SOCKET 7" : "CPU"}</text>`;
  } else if (id === "ssd") {
    model = `${modelBlock(41, 72, 222, 51, 16, activeBuildId === "advanced" ? "#253d47" : "#297568", "#5f9b89", "#183f3c")}
      <path d="M58 84h42v27H58zm54 0h42v27h-42zm54 0h34v27h-34z" fill="#17343a" stroke="#6f958b" stroke-width="2"/>
      <path d="M243 80v35m-9-33v31m-9-31v31" stroke="#e6c967" stroke-width="4"/>
      <circle cx="53" cy="98" r="5" fill="#d8dbc1"/>
      <path d="M49 124h181" stroke="#163d38" stroke-width="3"/>
      <text x="151" y="102" fill="#c1d3ce" font-size="10" font-family="monospace" text-anchor="middle">NVME</text>`;
  } else if (id === "optical") {
    model = `${modelBlock(52, 51, 202, 84, 24, "#aaa88f", "#d2cfb5", "#6d7063", "#ded9bd")}
      <rect x="64" y="64" width="177" height="15" fill="#2e3838"/>
      <rect x="66" y="88" width="104" height="28" fill="#747c72" stroke="#d7d5bd" stroke-width="2"/>
      <circle cx="224" cy="103" r="8" fill="#d9d6b9"/>
      <path d="M75 122h150" stroke="#4c5752" stroke-width="3"/>
      <text x="119" y="107" fill="#e0ddc4" font-size="12" font-family="monospace" text-anchor="middle">4X CD-ROM</text>`;
  } else if (id === "floppy") {
    model = `${modelBlock(57, 54, 192, 81, 23, "#b9b49a", "#ded9bd", "#777b6c", "#ded9bd")}
      <rect x="70" y="68" width="140" height="12" fill="#303838"/>
      <rect x="216" y="64" width="14" height="25" fill="#747b70"/>
      <rect x="73" y="96" width="66" height="18" fill="#888b79"/>
      <circle cx="218" cy="108" r="6" fill="#a4e635"/>
      <text x="166" y="116" fill="#e0ddc4" font-size="11" font-family="monospace" text-anchor="middle">1.44 MB</text>`;
  } else if (id === "hdd") {
    model = `${modelBlock(66, 38, 171, 108, 22, "#8999a0", "#c0ccd0", "#536b75")}
      <rect x="79" y="51" width="145" height="81" fill="#c4cbc5" stroke="#eef0df" stroke-width="2"/>
      <circle cx="125" cy="90" r="29" fill="#9dadae" stroke="#71878b" stroke-width="3"/><circle cx="125" cy="90" r="8" fill="#4d636b"/>
      <path d="M161 62h47v11h-47zm0 18h47v11h-47zm0 18h32v11h-32z" fill="#72878a"/>
      <path d="M151 122l38-25" stroke="#4d636b" stroke-width="5"/><circle cx="151" cy="122" r="6" fill="#71878b"/>
      <text x="190" y="125" fill="#435a60" font-size="10" font-family="monospace" text-anchor="middle">${activeBuildId === "retro" ? "IDE HDD" : "SATA HDD"}</text>`;
  } else if (id === "fans") {
    model = `${modelBlock(80, 24, 140, 128, 18, "#172c37", "#496473", "#0f222c")}
      ${[52, 88, 124].map((y) => `<circle cx="150" cy="${y}" r="24" fill="#29444f" stroke="#62a1a0" stroke-width="3"/><path d="M150 ${y - 19}v38m-19-19h38M134 ${y - 16}l32 32m0-32-32 32" stroke="#62e6d3" stroke-width="3"/><circle cx="150" cy="${y}" r="6" fill="#ffc857"/>`).join("")}
      <path d="M87 31h5v5h-5zm116 0h5v5h-5zM87 139h5v5h-5zm116 0h5v5h-5z" fill="#c5d0cb"/>`;
  } else if (id === "psu") {
    model = `${modelBlock(55, 47, 190, 98, 24, activeBuildId === "retro" ? "#6f7469" : "#3a4854", "#8797a3", "#26343e")}
      <circle cx="116" cy="96" r="36" fill="#1a2c36" stroke="#91a1ab" stroke-width="3"/>
      <path d="M116 64v64M84 96h64M93 73l46 46m0-46-46 46" stroke="#607e8a" stroke-width="4"/><circle cx="116" cy="96" r="8" fill="#344e5d"/>
      <rect x="166" y="60" width="62" height="24" fill="#ffc857"/>
      <text x="197" y="76" fill="#263944" font-size="13" font-family="monospace" text-anchor="middle">${build.psuLabel}</text>
      <path d="M169 99h12v12h-12zm19 0h12v12h-12zm19 0h12v12h-12zM169 120h12v12h-12zm19 0h12v12h-12zm19 0h12v12h-12z" fill="#14252e" stroke="#617b88" stroke-width="2"/>`;
  } else {
    model = `${modelBlock(54, 30, 201, 120, 19, activeBuildId === "retro" ? "#50754b" : "#25675b", "#62a47e", "#173f3b")}
      <path d="M67 42h52v28H67zm125 0h14v46h-14zm-22 0h13v15h-13zM67 121h173v10H67zm0 17h130v6H67z" fill="#17363b" stroke="#8bc4a0" stroke-width="2"/>
      <rect x="128" y="46" width="43" height="39" fill="#a9b8b2" stroke="#e2e8cf" stroke-width="3"/>
      <rect x="137" y="55" width="25" height="21" fill="#637c7d"/>
      <path d="M73 95h38v15H73zm53-4h23v19h-23zm64-2h38v21h-38z" fill="#24434a"/>
      <path d="M73 54h33M73 63h24m79 39h52M116 115h50M87 147v-16m113 16v-16" stroke="#4d9679" stroke-width="3"/>
      <path d="M61 37h5v5h-5zm180 0h5v5h-5zM61 137h5v5h-5zm180 0h5v5h-5z" fill="#d8dbc1"/>
      <text x="190" y="116" fill="#ffc857" font-size="8" font-family="monospace" text-anchor="middle">${build.model}</text>`;
  }

  return `<span class="part-model-badge" aria-hidden="true">3D PART VIEW</span><svg class="part-model-svg" viewBox="0 0 320 180" aria-hidden="true"><ellipse class="part-model-shadow" cx="160" cy="158" rx="112" ry="12" fill="#050c13" opacity="0.55"/><g class="part-model-object">${model}</g></svg>`;
}

function sceneObjectMarkup(config, className, frontContent = "", attributes = "") {
  const style = `--x:${config.x}px;--y:${config.y}px;--z:${config.z}px;--w:${config.w}px;--h:${config.h}px;--d:${config.d}px;`
    + (config.r ? `--r:${config.r}deg;` : "")
    + (config.ry ? `--ry:${config.ry}deg;` : "")
    + (config.rx ? `--rx:${config.rx}deg;` : "")
    + (config.color ? `--part-color:${config.color};` : "")
    + (config.top ? `--part-top:${config.top};` : "")
    + (config.side ? `--part-side:${config.side};` : "");
  return `<div class="scene-object ${className}" style="${style}" draggable="false" ${attributes}>
    <div class="scene-face back"></div><div class="scene-face right"></div><div class="scene-face left"></div>
    <div class="scene-face top"></div><div class="scene-face bottom"></div><div class="scene-face front">${frontContent}</div>
  </div>`;
}

function exteriorSvg(kind) {
  if (kind === "rear") {
    return `<svg viewBox="0 0 200 160" aria-hidden="true"><rect width="200" height="160" fill="#101b26" stroke="#71899a" stroke-width="4"/>
      <text x="14" y="18" fill="#8da5b4" font-size="9" font-family="monospace">REAR I/O</text>
      <rect x="16" y="29" width="42" height="15" fill="#132b3c" stroke="#62a1a0" stroke-width="2"/><rect x="16" y="49" width="42" height="15" fill="#132b3c" stroke="#62a1a0" stroke-width="2"/>
      <rect x="16" y="77" width="43" height="14" fill="#111923" stroke="#8da5b4" stroke-width="2"/>
      <rect x="78" y="29" width="36" height="34" fill="#17242b" stroke="#8da5b4" stroke-width="2"/><path d="M83 35h26v5H83zm0 10h26v5H83zm0 10h26v5H83z" fill="#496172"/><circle cx="108" cy="34" r="3" fill="#a4e635"/>
      <circle cx="85" cy="87" r="8" fill="#ff7b72" stroke="#d8dbc1" stroke-width="2"/><circle cx="106" cy="87" r="8" fill="#a4e635" stroke="#d8dbc1" stroke-width="2"/><circle cx="85" cy="111" r="8" fill="#62a1a0" stroke="#d8dbc1" stroke-width="2"/>
      <path d="M135 30h48v6h-48zm0 14h48v6h-48zm0 14h48v6h-48zm0 14h48v6h-48zm0 14h48v6h-48zm0 14h48v6h-48z" fill="#314657"/>
      <text x="16" y="73" fill="#8da5b4" font-size="7" font-family="monospace">USB</text><text x="16" y="104" fill="#8da5b4" font-size="7" font-family="monospace">HDMI</text>
      <text x="76" y="75" fill="#8da5b4" font-size="7" font-family="monospace">LAN</text><text x="76" y="133" fill="#8da5b4" font-size="7" font-family="monospace">AUDIO</text>
    </svg>`;
  }
  if (kind === "psu") {
    return `<svg viewBox="0 0 100 60" aria-hidden="true"><rect width="100" height="60" fill="#1a242d" stroke="#71899a" stroke-width="3"/>
      <rect x="10" y="13" width="43" height="34" rx="4" fill="#080f16" stroke="#8da5b4" stroke-width="2"/><path d="M21 22v13m11-13v13m11-13v13" stroke="#c0ccd0" stroke-width="4"/>
      <rect x="66" y="17" width="24" height="25" fill="#263944" stroke="#8da5b4" stroke-width="2"/><path d="M68 19h20v11H68z" fill="#ff7b72"/><text x="72" y="53" fill="#8da5b4" font-size="8" font-family="monospace">AC</text>
    </svg>`;
  }
  if (kind === "top") {
    return `<svg viewBox="0 0 200 30" aria-hidden="true"><rect width="200" height="30" fill="#142330" stroke="#536b77" stroke-width="2"/><path d="M10 7h115v4H10zm0 8h115v4H10zm0 8h115v4H10z" fill="#314657"/><rect x="143" y="8" width="20" height="14" fill="#0c151f" stroke="#62a1a0" stroke-width="2"/><rect x="174" y="8" width="15" height="14" rx="4" fill="#0c151f" stroke="#8da5b4" stroke-width="2"/></svg>`;
  }
  return `<svg viewBox="0 0 40 250" aria-hidden="true"><rect width="40" height="250" fill="#142330" stroke="#536b77" stroke-width="2"/>
    <circle cx="20" cy="25" r="10" fill="#263944" stroke="#ffc857" stroke-width="3"/><path d="M20 17v9" stroke="#ffc857" stroke-width="3"/><circle cx="20" cy="48" r="3" fill="#a4e635"/>
    <rect x="9" y="68" width="22" height="12" fill="#0c151f" stroke="#62a1a0" stroke-width="2"/><rect x="9" y="91" width="22" height="12" fill="#0c151f" stroke="#62a1a0" stroke-width="2"/>
    <rect x="12" y="116" width="16" height="11" rx="4" fill="#0c151f" stroke="#8da5b4" stroke-width="2"/><circle cx="20" cy="147" r="7" fill="#0c151f" stroke="#8da5b4" stroke-width="2"/>
    <path d="M11 172h18v4H11zm0 12h18v4H11zm0 12h18v4H11zm0 12h18v4H11z" fill="#314657"/><text x="12" y="231" fill="#8da5b4" font-size="9" font-family="monospace">I/O</text>
  </svg>`;
}

function createScene() {
  const chassis = [
    { config: { x: 48, y: 20, w: 578, h: 430, d: 8, z: -18 }, className: "case-object case-back" },
    { config: { x: 48, y: 20, w: 578, h: 20, d: 88, z: 26 }, className: "case-object case-top" },
    { config: { x: 48, y: 430, w: 578, h: 20, d: 88, z: 26 }, className: "case-object case-bottom" },
    { config: { x: 48, y: 20, w: 18, h: 430, d: 88, z: 26 }, className: "case-object case-left" },
    { config: { x: 608, y: 20, w: 18, h: 430, d: 88, z: 26 }, className: "case-object case-right" }
  ];
  const exterior = [
    { config: { x: 598, y: 64, w: 26, h: 250, d: 10, z: 72, color: "#142330", top: "#536b77", side: "#101b26" }, className: "exterior-object front-io", content: exteriorSvg("front") },
    { config: { x: 250, y: 20, w: 180, h: 20, d: 25, z: 20, color: "#142330", top: "#536b77", side: "#101b26" }, className: "exterior-object top-io", content: exteriorSvg("top") },
    { config: { x: 95, y: 75, w: 190, h: 155, d: 6, z: -25, ry: 180, color: "#101b26", top: "#71899a", side: "#101b26" }, className: "exterior-object rear-io", content: exteriorSvg("rear") },
    { config: { x: 110, y: 365, w: 100, h: 60, d: 6, z: -25, ry: 180, color: "#1a242d", top: "#71899a", side: "#101b26" }, className: "exterior-object rear-power", content: exteriorSvg("psu") },
    { config: { x: 70, y: 450, w: 55, h: 14, d: 30, z: 0, color: "#111923", top: "#314657", side: "#080f16" }, className: "exterior-object case-foot" },
    { config: { x: 535, y: 450, w: 55, h: 14, d: 30, z: 0, color: "#111923", top: "#314657", side: "#080f16" }, className: "exterior-object case-foot" }
  ];

  elements.scene3d.innerHTML = chassis.map((item) => sceneObjectMarkup(item.config, item.className)).join("")
    + exterior.map((item) => sceneObjectMarkup(item.config, item.className, item.content || "")).join("")
    + ALL_PART_IDS.map((id) => {
      const part = sceneObjectMarkup(SCENE_PARTS[id], "scene-part", partIcon(id),
        `data-scene-part="${id}" role="button" tabindex="-1" aria-label="${PART_LIBRARY[id].name}"`);
      const slot = sceneObjectMarkup(SCENE_PARTS[id], "scene-slot", `<span class="scene-slot-label">INSTALL ${PART_LIBRARY[id].name}</span>`,
        `data-scene-slot="${id}" role="button" tabindex="-1" aria-hidden="true"`);
      return part + slot;
    }).join("")
    + Object.entries(HARDWARE).map(([hardwareId, item]) => item.pieces
      .flatMap((piece) => [piece, ...(piece.connectorPieces || [])])
      .map((piece) => sceneObjectMarkup(
        piece,
        `scene-hardware ${item.type === "screw" ? "screw-piece" : piece.connector ? "connector-piece" : "wire-piece"}`,
        item.type === "screw" ? '<span class="screw-head">×</span>' : piece.svg,
        `data-hardware="${hardwareId}" role="button" tabindex="-1" aria-label="Remove ${item.label}" aria-hidden="true"`
      )).join("")).join("");

  ALL_PART_IDS.forEach((id) => {
    const part = elements.scene3d.querySelector(`[data-scene-part="${id}"]`);
    const slot = elements.scene3d.querySelector(`[data-scene-slot="${id}"]`);
    sceneParts.set(id, part);
    sceneSlots.set(id, slot);
    part.addEventListener("click", () => {
      if (viewState.didDrag) {
        viewState.didDrag = false;
        return;
      }
      handlePartActivation(id);
    });
    slot.addEventListener("click", () => {
      if (viewState.didDrag) {
        viewState.didDrag = false;
        return;
      }
      handleSlotActivation(id);
    });
    part.addEventListener("keydown", (event) => activateWithKeyboard(event, () => handlePartActivation(id)));
    slot.addEventListener("keydown", (event) => activateWithKeyboard(event, () => handleSlotActivation(id)));
  });

  Object.keys(HARDWARE).forEach((hardwareId) => {
    const pieces = [...elements.scene3d.querySelectorAll(`[data-hardware="${hardwareId}"]`)];
    sceneHardware.set(hardwareId, pieces);
    pieces.forEach((piece) => {
      piece.addEventListener("click", () => {
        if (viewState.didDrag) {
          viewState.didDrag = false;
          return;
        }
        handleHardwareActivation(hardwareId);
      });
      piece.addEventListener("keydown", (event) => activateWithKeyboard(event, () => handleHardwareActivation(hardwareId)));
    });
  });
}

function hardwareAvailable(hardwareId) {
  const item = HARDWARE[hardwareId];
  return (!item.builds || item.builds.includes(activeBuildId)) && item.parts.some((id) => partIds().includes(id));
}

function hardwareForPart(partId) {
  return Object.entries(HARDWARE)
    .filter(([hardwareId, item]) => hardwareAvailable(hardwareId) && item.parts.includes(partId))
    .map(([id, item]) => ({ id, ...item }));
}

function pendingHardware(partId) {
  return hardwareForPart(partId).filter((item) => !state.hardwareRemoved.has(item.id));
}

function syncHardwareForPartRemoval(partId) {
  hardwareForPart(partId).forEach((item) => state.hardwareRemoved.add(item.id));
}

function syncHardwareForPartInstall(partId) {
  hardwareForPart(partId).forEach((item) => {
    if (item.parts.every((id) => !partIds().includes(id) || !state.removed.has(id))) {
      state.hardwareRemoved.delete(item.id);
    }
  });
}

function highlightPendingHardware(partId) {
  const pending = pendingHardware(partId);
  pending.forEach((item) => {
    sceneHardware.get(item.id)?.forEach((piece) => {
      piece.classList.remove("is-hint");
      void piece.getBoundingClientRect();
      piece.classList.add("is-hint");
      window.setTimeout(() => piece.classList.remove("is-hint"), 1300);
    });
  });
  const names = pending.slice(0, 2).map((item) => item.label).join(" and ");
  const additional = pending.length > 2 ? ` plus ${pending.length - 2} more connection${pending.length > 3 ? "s" : ""}` : "";
  showToast(`First remove the ${names}${additional} for the ${partById(partId).name}.`, true);
  playSound("hint");
}

function handleHardwareActivation(hardwareId) {
  if (!state.started || state.paused || state.complete || state.locked || viewState.mode !== "3d") return;
  const item = HARDWARE[hardwareId];
  if (!item || !hardwareAvailable(hardwareId) || state.hardwareRemoved.has(hardwareId)) return;
  if (item.parts.some((id) => state.removed.has(id))) return;

  state.hardwareRemoved.add(hardwareId);
  renderScene();
  const current = currentPart();
  const ready = current && pendingHardware(current.id).length === 0;
  showToast(`${item.label} removed${ready ? ` · ${current.name} is ready to remove` : ""}.`);
  playSound("remove");
}

function renderHardware() {
  let availableCount = 0;
  let removedCount = 0;
  Object.entries(HARDWARE).forEach(([hardwareId, item]) => {
    const available = hardwareAvailable(hardwareId);
    if (available) availableCount += 1;
    const removed = state.hardwareRemoved.has(hardwareId);
    if (available && removed) removedCount += 1;
    const parentRemoved = item.parts.some((id) => state.removed.has(id));
    const viewRemoved = hardwareId === "panel-screws" && viewState.sideRemoved;
    const hidden = !available || removed || parentRemoved || viewRemoved;
    sceneHardware.get(hardwareId)?.forEach((piece) => {
      piece.classList.toggle("is-hidden", hidden);
      piece.setAttribute("aria-hidden", String(hidden));
      piece.setAttribute("tabindex", String(!hidden && viewState.mode === "3d" && state.started ? 0 : -1));
      piece.setAttribute("aria-label", `Remove ${item.label}`);
    });
  });
  elements.hardwareStatus.textContent = `${removedCount} / ${availableCount} HARDWARE OFF`;
}

function renderScene() {
  const is3d = viewState.mode === "3d";
  const isDisassembly = !state.freeMode && state.phase === "disassembly";
  const current = currentPart();
  elements.scene3d.classList.toggle("is-xray", viewState.xray);

  sceneParts.forEach((element, id) => {
    const available = partIds().includes(id);
    const removed = state.removed.has(id);
    const viewRemoved = id === "panel" && viewState.sideRemoved;
    const hidden = !available || removed || viewRemoved;
    element.classList.toggle("is-hidden", hidden);
    element.classList.toggle("is-target", Boolean(is3d && !state.freeMode && available && isDisassembly && current?.id === id && !state.locked && !viewRemoved));
    element.setAttribute("tabindex", String(is3d && available && !removed && !viewRemoved && (isDisassembly || state.freeMode) && state.started ? 0 : -1));
    element.setAttribute("aria-hidden", String(hidden));
    if (available) element.setAttribute("aria-label", `${state.freeMode || isDisassembly ? "Remove" : "Installed"}: ${partById(id).name}`);
  });

  sceneSlots.forEach((element, id) => {
    const active = is3d && partIds().includes(id) && !isDisassembly && state.selectedPart === id && !state.locked;
    element.classList.toggle("is-active", active);
    element.setAttribute("tabindex", active ? "0" : "-1");
    element.setAttribute("aria-hidden", String(!active));
    if (partIds().includes(id)) element.setAttribute("aria-label", `Install ${partById(id).name} here`);
  });
  renderHardware();
}

function updateViewTransform() {
  const is3d = viewState.mode === "3d";
  elements.zoomLabel.textContent = `${Math.round(viewState.zoom * 100)}%`;
  if (!is3d) {
    $("computerSvg").style.transform = `scale(${viewState.zoom})`;
    return;
  }

  const widthScale = Math.max(0.2, (elements.workbench3d.clientWidth - 24) / 820);
  const heightScale = Math.max(0.2, (elements.workbench3d.clientHeight - 20) / 600);
  const fitScale = Math.min(0.85, widthScale, heightScale);
  const scale = fitScale * viewState.zoom;
  elements.scene3d.style.transform = `rotateX(${viewState.pitch}deg) rotateY(${viewState.yaw}deg) scale(${scale})`;
}

function updateViewControls() {
  const is3d = viewState.mode === "3d";
  elements.workbench.classList.toggle("is-3d", is3d);
  elements.workbench3d.hidden = !is3d;
  elements.workbench3d.setAttribute("aria-hidden", String(!is3d));
  $("computerSvg").setAttribute("aria-hidden", String(is3d));
  elements.viewModeButton.innerHTML = `<span aria-hidden="true">◈</span> ${is3d ? "2D VIEW" : "3D VIEW"}`;
  elements.viewModeButton.setAttribute("aria-pressed", String(is3d));
  elements.viewModeButton.setAttribute("aria-label", `Switch to ${is3d ? "2D" : "3D"} workbench`);
  elements.caseViewControls.hidden = !is3d;
  elements.xrayButton.setAttribute("aria-pressed", String(viewState.xray));
  elements.sidePanelButton.setAttribute("aria-pressed", String(viewState.sideRemoved));
  elements.sidePanelButton.textContent = viewState.sideRemoved ? "RESTORE SIDE" : "REMOVE SIDE";
  elements.viewHelp.textContent = is3d ? "DRAG TO ORBIT · SCROLL TO ZOOM" : "SCROLL TO ZOOM";
  updateViewTransform();
}

function setFreeMode(enabled) {
  resetGame(true);
  state.freeMode = enabled;
  render();
  showToast(enabled
    ? "Free Build: remove or reinstall any part in any order. In 3D, handle its screws and wires first."
    : "Guided mode restarted. Follow Nova's highlighted teardown sequence.");
  playSound("start");
}

function setViewMode(mode) {
  viewState.mode = mode;
  viewState.dragging = false;
  elements.workbench3d.classList.remove("is-dragging");
  updateViewControls();
  render();
}

function setZoom(value) {
  viewState.zoom = Math.max(0.55, Math.min(2.5, value));
  updateViewTransform();
}

function resetView() {
  viewState.yaw = -24;
  viewState.pitch = -18;
  setZoom(1);
}

function handleScenePointerDown(event) {
  if (viewState.mode !== "3d" || event.button !== 0) return;
  viewState.dragging = true;
  viewState.pointerId = event.pointerId;
  viewState.lastX = event.clientX;
  viewState.lastY = event.clientY;
  viewState.didDrag = false;
  elements.workbench3d.classList.add("is-dragging");
}

function handleScenePointerMove(event) {
  if (!viewState.dragging || event.pointerId !== viewState.pointerId) return;
  event.preventDefault();
  const deltaX = event.clientX - viewState.lastX;
  const deltaY = event.clientY - viewState.lastY;
  if (Math.abs(deltaX) + Math.abs(deltaY) > 2) {
    viewState.didDrag = true;
    if (!elements.workbench3d.hasPointerCapture(event.pointerId)) {
      elements.workbench3d.setPointerCapture(event.pointerId);
    }
  }
  viewState.yaw += deltaX * 0.55;
  viewState.pitch = Math.max(-85, Math.min(85, viewState.pitch - deltaY * 0.45));
  viewState.lastX = event.clientX;
  viewState.lastY = event.clientY;
  updateViewTransform();
}

function handleScenePointerUp(event) {
  if (event.pointerId !== viewState.pointerId) return;
  viewState.dragging = false;
  viewState.pointerId = null;
  elements.workbench3d.classList.remove("is-dragging");
  if (elements.workbench3d.hasPointerCapture(event.pointerId)) {
    elements.workbench3d.releasePointerCapture(event.pointerId);
  }
}

function handleSceneKeyboard(event) {
  const key = event.key;
  if (key === "ArrowLeft") viewState.yaw -= 8;
  else if (key === "ArrowRight") viewState.yaw += 8;
  else if (key === "ArrowUp") viewState.pitch = Math.min(85, viewState.pitch + 8);
  else if (key === "ArrowDown") viewState.pitch = Math.max(-85, viewState.pitch - 8);
  else if (key === "+" || key === "=") setZoom(viewState.zoom + 0.1);
  else if (key === "-" || key === "_") setZoom(viewState.zoom - 0.1);
  else if (key === "0") resetView();
  else return;
  event.preventDefault();
  updateViewTransform();
}

function applyBuildVisuals() {
  const build = activeBuild();
  svgParts.forEach((element, id) => {
    element.innerHTML = build.artwork?.[id] || defaultArtwork.get(id);
  });

  $("computerSvg").dataset.build = activeBuildId;
  elements.scene3d.dataset.build = activeBuildId;
  $("computerTitle").textContent = `Interactive ${build.year} ${build.name}`;
  $("computerDescription").textContent = `${build.description} Click the highlighted part to remove it. During reassembly, select a tray part and then click its outlined location.`;
  $("caseModelLabel").textContent = `${build.model} / ${build.chassis} CHASSIS`;
  $("motherboardLabel").textContent = build.boardLabel;
  $("psuWattLabel").textContent = build.psuLabel;
  $("benchModel").textContent = `MODEL: ${build.model}`;
}

function renderBuildSelection() {
  elements.buildSelector.innerHTML = Object.values(BUILDS).map((build) => {
    const selected = build.id === pendingBuildId;
    return `
      <button class="build-choice${selected ? " is-selected" : ""}" type="button" data-build-choice="${build.id}" aria-pressed="${selected}">
        <span class="build-choice-top"><b>${build.year}</b><em>${build.difficulty}</em></span>
        <strong>${build.name}</strong>
        <span class="build-choice-description">${build.cardDescription}</span>
        <span class="build-choice-meta">${build.parts.length} PARTS · ${build.chassis} BLUEPRINT</span>
      </button>`;
  }).join("");

  elements.buildSelector.querySelectorAll("[data-build-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      pendingBuildId = button.dataset.buildChoice;
      renderBuildSelection();
      playSound("select");
    });
  });

  const build = BUILDS[pendingBuildId];
  elements.selectedBuildSpecs.innerHTML = build.specs.map((spec) => `<span>${spec}</span>`).join("");
  elements.startButton.innerHTML = `START ${build.shortName} BUILD <span aria-hidden="true">→</span>`;
  elements.introFootnote.textContent = `${build.parts.length} PARTS · GUIDED TEARDOWN & REBUILD · QUIZ INCLUDED`;
}

function renderBuildOverview() {
  const build = activeBuild();
  elements.buildName.textContent = build.name;
  elements.buildYear.textContent = `${build.year} // ${build.level}`;
  elements.buildDescription.textContent = build.description;
  elements.buildSpecs.innerHTML = build.specs.map((spec) => `<span>${spec}</span>`).join("");
  elements.helpSequenceTitle.textContent = `${build.shortName} TEARDOWN SEQUENCE`;
  elements.helpSequence.textContent = activeParts().map((part) => part.name).join(" → ");
  elements.helpBuildNote.textContent = `Keyboard: Tab to a part or button, then press Enter or Space. Use a tray part's Inspect button for its 3D view and the quick quiz for more practice. ${build.note}`;
}

function startGame() {
  activeBuildId = pendingBuildId;
  applyBuildVisuals();
  elements.closeIntroButton.hidden = true;
  elements.introModal.hidden = true;
  resetGame(true);
  showToast(`${activeBuild().name} ready. Remove the glowing ${currentPart().name}!`);
  playSound("start");
}

function openBuildSelector() {
  if (!elements.introModal.hidden) return;
  pendingBuildId = activeBuildId;
  renderBuildSelection();
  elements.closeIntroButton.hidden = !state.started;
  elements.introModal.hidden = false;
  state.paused = true;
  elements.buildSelector.querySelector(`[data-build-choice="${pendingBuildId}"]`)?.focus();
}

function closeBuildSelector() {
  elements.introModal.hidden = true;
  elements.closeIntroButton.hidden = true;
  syncGamePause();
  $("buildsButton").focus();
}

function resetGame(autostart = true) {
  window.clearInterval(timerHandle);
  window.clearTimeout(actionHandle);
  window.clearTimeout(phaseHandle);
  state = createInitialState();
  state.started = autostart;
  state.paused = !autostart;

  elements.phaseModal.hidden = true;
  elements.helpModal.hidden = true;
  elements.guideModal.hidden = true;
  elements.quizModal.hidden = true;
  elements.introModal.hidden = autostart;
  elements.completionStats.hidden = true;
  elements.completionQuizButton.hidden = true;
  elements.completionBuildButton.hidden = true;
  svgParts.forEach((part) => {
    part.classList.remove("is-removing", "is-installing", "is-wrong", "is-hint");
  });
  sceneParts.forEach((part) => {
    part.classList.remove("is-removing", "is-installing", "is-wrong", "is-hint");
  });
  sceneSlots.forEach((slot) => slot.classList.remove("is-hint"));
  sceneHardware.forEach((pieces) => pieces.forEach((piece) => piece.classList.remove("is-hint")));

  render();
  updateTimer();

  if (autostart) {
    timerHandle = window.setInterval(() => {
      if (state.started && !state.paused && !state.complete) {
        state.elapsed += 1;
        updateTimer();
      }
    }, 1000);
  }
}

function render() {
  const current = currentPart();
  const freeMode = state.freeMode;
  const isDisassembly = !freeMode && state.phase === "disassembly";
  const total = partIds().length;
  const progress = freeMode ? state.removed.size : Math.min(state.step, total);

  renderBuildOverview();
  elements.freeModeButton.textContent = freeMode ? "GUIDED MODE" : "FREE BUILD";
  elements.freeModeButton.setAttribute("aria-pressed", String(freeMode));
  elements.freeModeButton.setAttribute("aria-label", freeMode ? "Return to guided build mode" : "Enter free build mode");
  elements.phaseLabel.textContent = freeMode ? "FREE BUILD" : isDisassembly ? "01 / DISASSEMBLY" : "02 / REASSEMBLY";
  elements.progressLabel.textContent = freeMode ? "PARTS IN TRAY" : isDisassembly ? "PARTS REMOVED" : "PARTS INSTALLED";
  elements.progressCount.textContent = `${progress} / ${total}`;
  elements.progressFill.style.width = `${(progress / total) * 100}%`;
  elements.progressFill.style.background = isDisassembly || freeMode ? "var(--cyan)" : "var(--green)";
  elements.progressTrack.style.setProperty("--segment", `${100 / total}%`);
  elements.progressTrack.setAttribute("aria-valuenow", String(progress));
  elements.progressTrack.setAttribute("aria-valuemax", String(total));
  elements.progressTrack.setAttribute("aria-label", freeMode ? "Parts in tray" : isDisassembly ? "Parts removed" : "Parts installed");
  elements.score.textContent = String(state.score).padStart(4, "0");
  elements.stepNumber.textContent = freeMode ? "∞" : String(Math.min(state.step + 1, total)).padStart(2, "0");

  if (current) {
    elements.instructionTitle.textContent = `${isDisassembly ? "Remove" : "Install"} the ${current.name}`;
    elements.instructionText.textContent = isDisassembly ? current.remove : current.install;
    elements.tipText.textContent = isDisassembly ? current.removeTip : current.installTip;
    elements.detailText.textContent = `${current.why} ${current.purpose} Build note: ${current.spec}.`;
  } else if (freeMode) {
    elements.instructionTitle.textContent = "Explore any part in any order";
    elements.instructionText.textContent = "Click any installed part to remove it, or select a tray part and its dashed slot to reinstall it. In 3D, disconnect wires and remove mounting screws first.";
    elements.tipText.textContent = "Free Build has no required sequence, score penalties, or completion check. Parts mount directly onto the motherboard and case.";
    elements.detailText.textContent = "Free Build is an open sandbox. Use 2D for quick removal and installation, or 3D to handle individual screws and wiring while orbiting the connected components.";
  } else {
    elements.instructionTitle.textContent = isDisassembly ? "Teardown complete" : "Rebuild complete";
    elements.instructionText.textContent = isDisassembly ? "Every removable part is safe in the tray." : "Every part is back in place. Great work!";
    elements.tipText.textContent = "Take your time and always handle real components with care.";
    elements.detailText.textContent = `You completed the full ${activeBuild().name} teardown and rebuild sequence. Try the quiz or explore another era.`;
  }

  elements.detailText.hidden = !state.detailOpen;
  elements.detailButton.setAttribute("aria-expanded", String(state.detailOpen));
  elements.detailButton.textContent = state.detailOpen ? "HIDE EXPLANATION" : "WHY THIS STEP?";
  elements.actionBadge.textContent = freeMode
    ? state.selectedPart ? "CLICK THE DASHED SLOT" : "FREE BUILD · REMOVE ANY PART"
    : isDisassembly
      ? "CLICK THE GLOWING PART"
      : state.selectedPart
        ? "CLICK THE GLOWING SLOT"
        : "CHOOSE A PART FROM THE TRAY";

  svgParts.forEach((element, id) => {
    const available = partIds().includes(id);
    const removed = state.removed.has(id);
    element.classList.toggle("is-unavailable", !available);
    element.classList.toggle("is-hidden", !available || removed);
    element.classList.toggle("is-target", Boolean(!freeMode && available && isDisassembly && current?.id === id && !state.locked));
    element.setAttribute("tabindex", String(viewState.mode === "2d" && available && !removed && (isDisassembly || freeMode) && state.started ? 0 : -1));
    element.setAttribute("aria-hidden", String(!available || removed));
    if (available) element.setAttribute("aria-label", `${state.freeMode || isDisassembly ? "Remove" : "Installed"}: ${partById(id).name}`);
  });

  svgSlots.forEach((element, id) => {
    const active = viewState.mode === "2d" && partIds().includes(id) && (freeMode || !isDisassembly) && state.selectedPart === id && !state.locked;
    element.classList.toggle("is-active", active);
    element.setAttribute("tabindex", active ? "0" : "-1");
    element.setAttribute("aria-hidden", String(!active));
    if (partIds().includes(id)) element.setAttribute("aria-label", `Install ${partById(id).name} here`);
  });

  renderTray();
  renderScene();
}

function renderTray() {
  const storedParts = state.removalOrder.filter((id) => state.removed.has(id));
  const isDisassembly = !state.freeMode && state.phase === "disassembly";
  const total = partIds().length;
  elements.trayCount.textContent = `${String(storedParts.length).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  elements.trayHelp.textContent = state.freeMode
    ? "Free Build: choose any removed part to reinstall, or Inspect it."
    : isDisassembly
      ? "Select Inspect on any stored part for a 3D view and details."
      : state.selectedPart
        ? "Part selected. Now click its dashed outline in the case."
        : "Choose the named part, or select Inspect for its 3D details.";

  if (storedParts.length === 0) {
    elements.partsTray.innerHTML = `
      <div class="empty-tray">
        <svg viewBox="0 0 64 48" aria-hidden="true"><path d="M5 13h54v30H5zM15 5h34v8H15z" fill="none" stroke="currentColor" stroke-width="4"/><path d="M24 24h16v8H24z" fill="currentColor"/></svg>
        <span>${isDisassembly ? "TRAY IS EMPTY" : "ALL PARTS INSTALLED"}</span>
      </div>`;
    return;
  }

  elements.partsTray.innerHTML = storedParts.map((id) => {
    const part = partById(id);
    const selected = state.selectedPart === id;
    const disabled = state.freeMode ? state.locked || state.complete : isDisassembly || state.locked || state.complete;
    const removalNumber = state.removalOrder.indexOf(id) + 1;
    return `
      <div class="tray-item${selected ? " is-selected" : ""}${disabled ? "" : " is-selectable"}" data-tray-part="${id}">
        <button class="tray-part-select" type="button" data-select-part="${id}"
          aria-label="${part.name}${state.freeMode ? ", select for reinstallation" : isDisassembly ? ", stored in tray" : ", select for installation"}"
          aria-pressed="${selected}" ${disabled ? "disabled" : ""}>
          ${partIcon(id)}
          <span class="tray-item-name">${part.name}</span>
          <span class="tray-item-status">${state.freeMode ? selected ? "SELECTED" : "REINSTALL" : isDisassembly ? `#${String(removalNumber).padStart(2, "0")} · STORED` : selected ? "SELECTED" : "SELECT PART"}</span>
        </button>
        <button class="tray-inspect-button" type="button" data-inspect-part="${id}" aria-label="Inspect ${part.name}">INSPECT</button>
      </div>`;
  }).join("");

  elements.partsTray.querySelectorAll("[data-select-part]").forEach((button) => {
    button.addEventListener("click", () => handleTraySelection(button.dataset.selectPart));
  });
  elements.partsTray.querySelectorAll("[data-inspect-part]").forEach((button) => {
    button.addEventListener("click", () => openGuide(button.dataset.inspectPart, button));
  });
}

function handlePartActivation(id) {
  if (!state.started || state.paused || state.complete || state.locked) return;
  if (!state.freeMode && state.phase !== "disassembly") return;
  if (!partIds().includes(id) || state.removed.has(id)) return;
  const current = currentPart();
  const part = partById(id);
  const element = viewState.mode === "3d" ? sceneParts.get(id) : svgParts.get(id);

  if (!state.freeMode && (!current || id !== current.id)) {
    state.mistakes += 1;
    animateWrong(element);
    showToast(`Not yet—${current ? `remove the ${current.name} next` : "follow Nova's instructions"}.`, true);
    playSound("error");
    return;
  }

  if (viewState.mode === "3d" && pendingHardware(id).length > 0) {
    highlightPendingHardware(id);
    return;
  }

  state.locked = true;
  element.classList.remove("is-target");
  element.classList.add("is-removing");
  playSound("remove");

  actionHandle = window.setTimeout(() => {
    element.classList.remove("is-removing");
    state.removed.add(id);
    if (!state.removalOrder.includes(id)) state.removalOrder.push(id);
    syncHardwareForPartRemoval(id);
    if (!state.freeMode) {
      state.step += 1;
      state.score += 100;
    }
    state.detailOpen = false;
    state.locked = false;
    render();
    showToast(state.freeMode ? `${part.name} removed · choose it in the tray to reinstall` : `${part.name} removed · +100 points`);
    playSound("success");

    if (!state.freeMode && state.step === partIds().length) {
      state.paused = true;
      phaseHandle = window.setTimeout(showTeardownComplete, REDUCED_MOTION ? 30 : 450);
    }
  }, REDUCED_MOTION ? 30 : 340);
}

function handleTraySelection(id) {
  if (!state.started || state.paused || state.complete || state.locked) return;
  if (!state.freeMode && state.phase !== "reassembly") return;
  if (state.freeMode && !state.removed.has(id)) return;
  const current = currentPart();
  const part = partById(id);
  const button = elements.partsTray.querySelector(`[data-tray-part="${id}"]`);

  if (!state.freeMode && (!current || id !== current.id)) {
    state.mistakes += 1;
    animateWrong(button);
    showToast(`${part.name} comes later. Install the ${current?.name || "highlighted part"} next.`, true);
    playSound("error");
    return;
  }

  state.selectedPart = id;
  state.detailOpen = false;
  render();
  showToast(state.freeMode ? `${part.name} selected—click its dashed slot to reinstall.` : `${current.name} selected—click its dashed outline in the case.`);
  playSound("select");
  const slot = viewState.mode === "3d" ? sceneSlots.get(id) : svgSlots.get(id);
  slot?.focus({ preventScroll: true });
}

function handleSlotActivation(id) {
  if (!state.started || state.paused || state.complete || state.locked) return;
  if (!state.freeMode && state.phase !== "reassembly") return;
  if (state.selectedPart !== id || (state.freeMode && !state.removed.has(id))) return;

  const current = currentPart();
  const part = partById(id);
  const element = viewState.mode === "3d" ? sceneParts.get(id) : svgParts.get(id);
  state.locked = true;
  state.selectedPart = null;
  state.removed.delete(id);
  syncHardwareForPartInstall(id);
  render();
  element.classList.add("is-installing");
  playSound("install");

  actionHandle = window.setTimeout(() => {
    element.classList.remove("is-installing");
    if (!state.freeMode) {
      state.step += 1;
      state.score += 100;
    }
    state.detailOpen = false;
    state.locked = false;
    render();
    showToast(state.freeMode ? `${part.name} reinstalled` : `${part.name} installed · +100 points`);
    playSound("success");

    if (!state.freeMode && state.step === partIds().length) finishGame();
  }, REDUCED_MOTION ? 30 : 360);
}

function showTeardownComplete() {
  const firstInstall = partById(buildOrder()[0]);
  elements.phaseModalEyebrow.textContent = `${activeBuild().year} BLUEPRINT // CHECKPOINT`;
  elements.phaseModalTitle.textContent = "STRIP-DOWN COMPLETE!";
  elements.phaseModalText.textContent = `All ${partIds().length} parts are safely stored. Now rebuild in reverse order, starting with the ${firstInstall.name}—the foundation of this PC.`;
  elements.achievementIcon.textContent = "★";
  elements.completionStats.hidden = true;
  elements.completionQuizButton.hidden = true;
  elements.completionBuildButton.hidden = true;
  elements.phaseModalButton.innerHTML = 'START REASSEMBLY <span aria-hidden="true">→</span>';
  modalAction = beginReassembly;
  elements.phaseModal.hidden = false;
  elements.phaseModalButton.focus();
  playSound("checkpoint");
}

function beginReassembly() {
  elements.phaseModal.hidden = true;
  state.phase = "reassembly";
  state.step = 0;
  state.selectedPart = null;
  state.detailOpen = false;
  state.paused = false;
  render();
  showToast(`Rebuild in reverse: choose the ${currentPart().name} in the tray.`);
  playSound("start");
}

function finishGame() {
  state.complete = true;
  state.paused = true;
  window.clearInterval(timerHandle);
  const careBonus = Math.max(0, 300 - state.mistakes * 10 - state.hints * 25);
  state.score += careBonus;
  render();

  const totalSlips = state.mistakes + state.hints;
  const rank = totalSlips === 0 ? "MASTER BUILDER" : totalSlips <= 4 ? "CAREFUL BUILDER" : "CURIOUS TINKERER";
  elements.phaseModalEyebrow.textContent = `${activeBuild().year} ${activeBuild().shortName} // COMPLETE`;
  elements.phaseModalTitle.textContent = "PC REBUILT!";
  elements.phaseModalText.textContent = `Every piece of the ${activeBuild().name} is back where it belongs. Rank: ${rank}. You earned a ${careBonus}-point care bonus. Take the knowledge check, rebuild this PC, or choose another build.`;
  elements.achievementIcon.textContent = "✓";
  elements.completionStats.innerHTML = `
    <div class="completion-stat"><span>TIME</span><strong>${formatTime(state.elapsed)}</strong></div>
    <div class="completion-stat"><span>HINTS</span><strong>${state.hints}</strong></div>
    <div class="completion-stat"><span>MISTAKES</span><strong>${state.mistakes}</strong></div>`;
  elements.completionStats.hidden = false;
  elements.completionQuizButton.hidden = false;
  elements.completionBuildButton.hidden = false;
  elements.phaseModalButton.innerHTML = 'BUILD AGAIN <span aria-hidden="true">↻</span>';
  modalAction = () => resetGame(true);
  phaseHandle = window.setTimeout(() => {
    elements.phaseModal.hidden = false;
    elements.phaseModalButton.focus();
    playSound("victory");
  }, REDUCED_MOTION ? 30 : 450);
}

function openGuide(partId = null, returnFocus = null) {
  if (!elements.guideModal.hidden) return;
  selectedGuidePart = partId && partIds().includes(partId) ? partId : currentPart()?.id || partIds()[0];
  guideReturnFocus = returnFocus || $("guideButton");
  renderGuide();
  elements.guideModal.hidden = false;
  state.paused = true;
  $("closeGuideButton").focus();
  playSound("select");
}

function renderGuide() {
  const build = activeBuild();
  if (!partIds().includes(selectedGuidePart)) selectedGuidePart = partIds()[0];
  const part = partById(selectedGuidePart);
  elements.guideBuildLabel.textContent = `${build.year} ${build.name} // ${partIds().length} COMPONENTS`;
  elements.guidePartList.innerHTML = partIds().map((id, index) => {
    const item = partById(id);
    const selected = id === selectedGuidePart;
    return `<button class="guide-part-button${selected ? " is-selected" : ""}" type="button" data-guide-part="${id}" aria-pressed="${selected}"><span>${String(index + 1).padStart(2, "0")}</span>${item.name}</button>`;
  }).join("");
  elements.guidePartList.querySelectorAll("[data-guide-part]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedGuidePart = button.dataset.guidePart;
      renderGuide();
      elements.guidePartList.querySelector(`[data-guide-part="${selectedGuidePart}"]`)?.focus();
      playSound("select");
    });
  });
  elements.guidePartIcon.innerHTML = partModel(part.id);
  elements.guidePartIcon.setAttribute("aria-label", `3D illustration of the ${part.name}`);
  elements.guidePartSpec.textContent = part.spec;
  elements.guidePartName.textContent = part.name;
  elements.guidePartPurpose.textContent = part.purpose;
  elements.guidePartFact.textContent = part.fact;
  elements.guidePartCare.textContent = part.removeTip;
  elements.compatibilityList.innerHTML = build.compatibility.map((item) => `<li>${item}</li>`).join("");
}

function closeGuide() {
  const returnFocus = guideReturnFocus;
  guideReturnFocus = null;
  elements.guideModal.hidden = true;
  syncGamePause();
  if (returnFocus?.isConnected) returnFocus.focus();
  else $("guideButton").focus();
  playSound("select");
}

function openQuiz() {
  if (!elements.quizModal.hidden) return;
  const returnToPhase = !elements.phaseModal.hidden;
  quizState = { ...createQuizState(), returnToPhase };
  elements.phaseModal.hidden = true;
  elements.quizModal.hidden = false;
  state.paused = true;
  renderQuiz();
  $("closeQuizButton").focus();
  playSound("start");
}

function renderQuiz() {
  const build = activeBuild();
  const questions = build.quiz;
  elements.quizBuildLabel.textContent = `${build.year} ${build.shortName} // KNOWLEDGE CHECK`;
  elements.quizScore.textContent = `${quizState.correct} CORRECT`;
  elements.quizAnswers.classList.remove("is-complete");

  if (quizState.finished) {
    const message = quizState.correct === questions.length
      ? "Perfect score—you know this blueprint!"
      : quizState.correct >= 2
        ? "Great work—review the explanations and try for a perfect score."
        : "Good start—open the part guide, then try another round.";
    elements.quizProgress.textContent = "QUIZ COMPLETE";
    elements.quizQuestion.textContent = `${quizState.correct} / ${questions.length} CORRECT`;
    elements.quizAnswers.innerHTML = `<div class="quiz-result"><span aria-hidden="true">${quizState.correct === questions.length ? "★" : "✓"}</span><strong>${message}</strong></div>`;
    elements.quizAnswers.classList.add("is-complete");
    elements.quizFeedback.textContent = "Your workshop score is unchanged; this quiz is for learning and practice.";
    elements.quizNextButton.hidden = false;
    elements.quizNextButton.textContent = "CLOSE QUIZ";
    return;
  }

  const question = questions[quizState.index];
  quizState.answered = false;
  elements.quizProgress.textContent = `QUESTION ${quizState.index + 1} / ${questions.length}`;
  elements.quizQuestion.textContent = question.question;
  elements.quizAnswers.innerHTML = question.answers.map((answer, index) => `
    <button class="quiz-answer" type="button" data-quiz-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${answer}</button>`).join("");
  elements.quizAnswers.querySelectorAll("[data-quiz-answer]").forEach((button) => {
    button.addEventListener("click", () => handleQuizAnswer(Number(button.dataset.quizAnswer)));
  });
  elements.quizFeedback.textContent = "Choose one answer. You will get an explanation immediately.";
  elements.quizNextButton.hidden = true;
}

function handleQuizAnswer(answerIndex) {
  if (quizState.answered || quizState.finished) return;
  quizState.answered = true;
  const question = activeBuild().quiz[quizState.index];
  const isCorrect = answerIndex === question.correct;
  if (isCorrect) quizState.correct += 1;

  elements.quizAnswers.querySelectorAll("[data-quiz-answer]").forEach((button, index) => {
    button.disabled = true;
    if (index === question.correct) button.classList.add("is-correct");
    if (index === answerIndex && !isCorrect) button.classList.add("is-wrong");
  });
  elements.quizScore.textContent = `${quizState.correct} CORRECT`;
  elements.quizFeedback.textContent = `${isCorrect ? "Correct! " : "Not quite. "}${question.explanation}`;
  elements.quizNextButton.hidden = false;
  elements.quizNextButton.innerHTML = quizState.index === activeBuild().quiz.length - 1
    ? 'SEE RESULTS <span aria-hidden="true">→</span>'
    : 'NEXT QUESTION <span aria-hidden="true">→</span>';
  elements.quizNextButton.focus();
  playSound(isCorrect ? "success" : "error");
}

function nextQuizStep() {
  if (quizState.finished) {
    closeQuiz();
    return;
  }
  if (!quizState.answered) return;
  if (quizState.index === activeBuild().quiz.length - 1) {
    quizState.finished = true;
  } else {
    quizState.index += 1;
  }
  renderQuiz();
  if (quizState.finished) elements.quizNextButton.focus();
  else elements.quizAnswers.querySelector("button")?.focus();
  playSound("select");
}

function closeQuiz() {
  elements.quizModal.hidden = true;
  if (quizState.returnToPhase && state.complete) {
    elements.phaseModal.hidden = false;
    elements.completionQuizButton.focus();
  } else {
    syncGamePause();
    $("quizButton").focus();
  }
  quizState.returnToPhase = false;
  playSound("select");
}

function showHint() {
  if (!state.started || state.paused || state.complete || state.locked) return;
  if (state.freeMode) {
    showToast("Free Build has no required order. Choose any installed part, or reinstall any tray part.");
    return;
  }
  const current = currentPart();
  if (!current) return;

  state.hints += 1;
  state.score = Math.max(0, state.score - 25);
  elements.score.textContent = String(state.score).padStart(4, "0");

  let target;
  if (state.phase === "disassembly") {
    target = viewState.mode === "3d" ? sceneParts.get(current.id) : svgParts.get(current.id);
    showToast(`Hint: the ${current.name} is flashing amber. ${current.removeTip}`);
  } else if (state.selectedPart) {
    target = viewState.mode === "3d" ? sceneSlots.get(current.id) : svgSlots.get(current.id);
    showToast(`Hint: place the ${current.name} inside the flashing dashed outline.`);
  } else {
    target = elements.partsTray.querySelector(`[data-tray-part="${current.id}"]`);
    showToast(`Hint: choose the ${current.name} card in the parts tray.`);
  }

  if (target) {
    target.classList.remove("is-hint");
    void target.getBoundingClientRect();
    target.classList.add("is-hint");
    window.setTimeout(() => target.classList.remove("is-hint"), 1300);
  }
  playSound("hint");
}

function animateWrong(element) {
  if (!element) return;
  element.classList.remove("is-wrong");
  void element.getBoundingClientRect();
  element.classList.add("is-wrong");
  window.setTimeout(() => element.classList.remove("is-wrong"), 260);
}

function updateTimer() {
  elements.timer.textContent = formatTime(state.elapsed);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function showToast(message, isError = false) {
  window.clearTimeout(toastHandle);
  elements.toast.textContent = message;
  elements.toast.classList.toggle("is-error", isError);
  elements.toast.classList.add("is-visible");
  toastHandle = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 3300);
}

function syncGamePause() {
  const modalOpen = [elements.introModal, elements.phaseModal, elements.guideModal, elements.quizModal, elements.helpModal]
    .some((modal) => !modal.hidden);
  if (state.started && !state.complete) state.paused = modalOpen;
}

function openHelp() {
  if (!elements.helpModal.hidden) return;
  state.paused = true;
  elements.helpModal.hidden = false;
  $("closeHelpButton").focus();
}

function closeHelp() {
  elements.helpModal.hidden = true;
  syncGamePause();
  $("helpButton").focus();
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  elements.soundButton.setAttribute("aria-pressed", String(soundEnabled));
  elements.soundButton.setAttribute("aria-label", soundEnabled ? "Turn sound off" : "Turn sound on");
  elements.soundIcon.textContent = soundEnabled ? "♪" : "×";
  elements.soundLabel.textContent = soundEnabled ? "SOUND ON" : "SOUND OFF";
  if (soundEnabled) playSound("select");
}

function playSound(name) {
  if (!soundEnabled) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  try {
    if (!audioContext) audioContext = new AudioContextClass();
    if (audioContext.state === "suspended") audioContext.resume();
    const sequences = {
      select: [[520, 0, 0.06]],
      remove: [[280, 0, 0.07], [190, 0.07, 0.09]],
      install: [[260, 0, 0.06], [420, 0.07, 0.09]],
      success: [[620, 0, 0.05], [820, 0.06, 0.07]],
      error: [[150, 0, 0.09], [120, 0.1, 0.11]],
      hint: [[660, 0, 0.05], [880, 0.07, 0.05], [660, 0.14, 0.05]],
      start: [[330, 0, 0.06], [440, 0.07, 0.06], [660, 0.14, 0.09]],
      checkpoint: [[440, 0, 0.07], [554, 0.08, 0.07], [659, 0.16, 0.07], [880, 0.24, 0.14]],
      victory: [[523, 0, 0.08], [659, 0.09, 0.08], [784, 0.18, 0.08], [1047, 0.27, 0.2]]
    };
    (sequences[name] || sequences.select).forEach(([frequency, delay, duration]) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const startAt = audioContext.currentTime + delay;
      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(frequency, startAt);
      gain.gain.setValueAtTime(0.025, startAt);
      gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      oscillator.start(startAt);
      oscillator.stop(startAt + duration);
    });
  } catch {
    // Audio is optional; gameplay continues if the browser blocks it.
  }
}

function activateWithKeyboard(event, callback) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    callback();
  }
}

function trapModalFocus(event) {
  const visibleModal = [elements.quizModal, elements.guideModal, elements.helpModal, elements.introModal, elements.phaseModal]
    .find((modal) => !modal.hidden);
  if (!visibleModal) return;

  if (event.key === "Escape") {
    if (visibleModal === elements.helpModal) closeHelp();
    else if (visibleModal === elements.guideModal) closeGuide();
    else if (visibleModal === elements.quizModal) closeQuiz();
    else if (visibleModal === elements.introModal && !elements.closeIntroButton.hidden) closeBuildSelector();
    else return;
    event.preventDefault();
    return;
  }
  if (event.key !== "Tab") return;

  const focusable = [...visibleModal.querySelectorAll("button:not([disabled]), [tabindex='0']")]
    .filter((element) => !element.hidden && element.getClientRects().length > 0);
  if (focusable.length === 0) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

svgParts.forEach((element, id) => {
  element.addEventListener("click", () => handlePartActivation(id));
  element.addEventListener("keydown", (event) => activateWithKeyboard(event, () => handlePartActivation(id)));
});

svgSlots.forEach((element, id) => {
  element.addEventListener("click", () => handleSlotActivation(id));
  element.addEventListener("keydown", (event) => activateWithKeyboard(event, () => handleSlotActivation(id)));
});

elements.freeModeButton.addEventListener("click", () => setFreeMode(!state.freeMode));
elements.viewModeButton.addEventListener("click", () => {
  setViewMode(viewState.mode === "3d" ? "2d" : "3d");
  playSound("select");
});
elements.xrayButton.addEventListener("click", () => {
  viewState.xray = !viewState.xray;
  updateViewControls();
  renderScene();
  playSound("select");
});
elements.sidePanelButton.addEventListener("click", () => {
  viewState.sideRemoved = !viewState.sideRemoved;
  updateViewControls();
  renderScene();
  playSound("select");
});
elements.zoomOutButton.addEventListener("click", () => setZoom(viewState.zoom - 0.1));
elements.zoomInButton.addEventListener("click", () => setZoom(viewState.zoom + 0.1));
elements.resetViewButton.addEventListener("click", resetView);
elements.workbench.addEventListener("wheel", (event) => {
  event.preventDefault();
  setZoom(viewState.zoom + (event.deltaY < 0 ? 0.08 : -0.08));
}, { passive: false });
elements.workbench3d.addEventListener("pointerdown", handleScenePointerDown);
elements.workbench3d.addEventListener("pointermove", handleScenePointerMove);
elements.workbench3d.addEventListener("pointerup", handleScenePointerUp);
elements.workbench3d.addEventListener("pointercancel", handleScenePointerUp);
elements.workbench3d.addEventListener("dragstart", (event) => event.preventDefault());
elements.workbench3d.addEventListener("keydown", handleSceneKeyboard);
window.addEventListener("resize", updateViewTransform);

elements.startButton.addEventListener("click", startGame);
elements.closeIntroButton.addEventListener("click", closeBuildSelector);
$("buildsButton").addEventListener("click", openBuildSelector);
$("guideButton").addEventListener("click", () => openGuide());
$("quizButton").addEventListener("click", openQuiz);
$("closeGuideButton").addEventListener("click", closeGuide);
$("closeQuizButton").addEventListener("click", closeQuiz);
elements.quizNextButton.addEventListener("click", nextQuizStep);
elements.completionQuizButton.addEventListener("click", openQuiz);
elements.completionBuildButton.addEventListener("click", () => {
  elements.phaseModal.hidden = true;
  openBuildSelector();
  playSound("select");
});
$("restartButton").addEventListener("click", () => {
  elements.introModal.hidden = true;
  resetGame(true);
  showToast(`Fresh ${activeBuild().shortName.toLowerCase()} workbench. Remove the ${currentPart().name}!`);
  playSound("start");
});
$("soundButton").addEventListener("click", toggleSound);
$("helpButton").addEventListener("click", openHelp);
$("closeHelpButton").addEventListener("click", closeHelp);
$("gotItButton").addEventListener("click", closeHelp);
$("hintButton").addEventListener("click", showHint);
$("detailButton").addEventListener("click", () => {
  state.detailOpen = !state.detailOpen;
  elements.detailText.hidden = !state.detailOpen;
  elements.detailButton.setAttribute("aria-expanded", String(state.detailOpen));
  elements.detailButton.textContent = state.detailOpen ? "HIDE EXPLANATION" : "WHY THIS STEP?";
  playSound("select");
});
elements.phaseModalButton.addEventListener("click", () => {
  if (modalAction) modalAction();
});
document.addEventListener("keydown", trapModalFocus);

createScene();
applyBuildVisuals();
updateViewControls();
renderBuildSelection();
render();
elements.startButton.focus();
