# Smith Home Models

Interactive 3D models of Smith home plans: https://inick07-ctrl.github.io/clarence-ct-3d/

- `#smith-01` opens Smith 01 (Clarence Ct U-plan), `#smith-02` opens Smith 02 (modern farmhouse with pool), `#smith-03` opens Smith 03 (Back Forty barndominium with shop garage), `#smith-04` opens Smith 04 (modern ranch with two master suites and a 3-car garage), `#smith-05` opens Smith 05 (three-gable modern farmhouse with a vaulted back porch), and `#smith-06` opens Smith 06 (original design: breezeway kitchen/dining/living, screened porch with a see-through fireplace, library + gym, safe room, side-load 3-car garage).
- `models/smith-06-plan.png` is generated, not scanned: `s06/gen.py` (kept outside the repo) writes both it and `models/smith-06.js` from the same wall list.
- To add a home, create `models/smith-0N.js` using the same format as `models/smith-02.js`, then add it to `models/registry.js`. A tab appears automatically.
