# Pixel PC Workshop

A dependency-free browser game that teaches simplified desktop PC teardown and rebuild procedures through three era-inspired builds.

## Play

Open `index.html` directly in a modern browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Choose a blueprint

- **1995 Retro Socket 7 PC — 10 parts:** Side panel, PCI graphics card, EDO SIMM memory, CPU heatsink and fan, Socket 7 CPU, CD-ROM drive, floppy disk drive, IDE hard drive, AT power supply, and motherboard.
- **2016 Classic Gaming Tower — 9 parts:** Side panel, graphics card, DDR4 RAM, CPU air cooler, LGA 1151 CPU, M.2 NVMe SSD, SATA hard drive, ATX power supply, and motherboard.
- **2026 Advanced Creator PC — 9 parts:** Side panel, high-performance GPU, DDR5 RAM, liquid CPU cooler, modern CPU, NVMe M.2 SSD, case cooling fans, modular power supply, and motherboard.

The 2026 configuration is illustrative rather than a specific shopping list. Reassembly always uses the reverse of the selected build's teardown order.

## Features

- **Guided gameplay:** Click the glowing component during disassembly. During reassembly, select the requested tray part and then its dashed location.
- **Interactive 3D workbench:** Toggle **3D View**, drag to orbit the computer from any angle, make the chassis transparent with **X-Ray Case**, or temporarily hide the side panel. Scroll to zoom in either 2D or 3D; on-screen zoom controls and a camera reset are also included.
- **Mounted parts, screws, and wiring:** 3D components sit directly against the motherboard rather than hovering. Remove build-specific mounting screws and disconnect smooth power/data leads routed behind components by clicking an exposed cable section or connector plug. Reinstallation reconnects the hardware, and the full guided teardown/rebuild works in 3D.
- **Detailed PC exterior:** The case includes front power/USB/audio connections, top vents, rear USB/HDMI/Ethernet/audio ports, an AC power inlet, and feet—all in the existing pixel-workshop theme. The side panel fits flush against the chassis.
- **Free Build sandbox:** Toggle **Free Build** to remove and reinstall any part in any order, in either 2D or 3D, without score penalties or a completion check. Switching between guided and free modes starts a fresh workbench.
- **3D component inspector:** Every stored tray part has an **Inspect** button that opens its animated isometric 3D illustration, purpose, specification, interesting fact, handling advice, and build compatibility checklist.
- **Knowledge checks:** Answer three era-specific questions with immediate explanations. Quiz results do not change the workshop score.
- **Build comparison:** Switch eras from the workbench—or use **Choose Other Build** after completing a PC—to see different components, artwork, instructions, specifications, and safety notes.
- **Keyboard support:** Press Tab to move between controls and parts; Enter or Space activates them. Dialogs support contained keyboard focus. In 3D view, arrow keys orbit, **+/−** zoom, and **0** resets the camera.
- **Hints and scoring:** A hint costs 25 points. Each correct removal or installation earns 100 points, and finishing earns a care bonus based on hints and mistakes.
- **Sound:** Optional synthesized retro sound effects; no audio files are needed.

The game is responsive, uses only local HTML/CSS/JavaScript, and includes reduced-motion support. It is an educational simplification, not a model-specific repair guide. Always shut down, unplug, and ground yourself before handling real hardware. Never open a power supply; consult the actual component manuals and a qualified technician when needed.
