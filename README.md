# PeakStead Designs

Design your homestead at its peak.

Interactive 3D models of the home plans: https://inick07-ctrl.github.io/clarence-ct-3d/

Hash links keep the original ids, so existing bookmarks still work:

- `#smith-01` opens **Willow Court** (a U-shaped single-story home around a quiet court)
- `#smith-02` opens **Poolside Gables** (modern farmhouse with a terrace and pool house)
- `#smith-03` opens **The Back Forty** (barndominium with a shop garage)
- `#smith-04` opens **Twin Oaks** (modern ranch with two master suites)
- `#smith-05` opens **Triple Gable** (three-gable modern farmhouse with a vaulted back porch)
- `#smith-06` opens **Breezeway Hearth** (breezeway farmhouse with a screened porch and see-through fireplace)
- `#smith-07` opens **Porchlight Farm** (farmhouse with fifty-foot porches front and back)
- `#smith-08` opens **Limewash Hall** (English Country ranch with a library, gym, and long back porch)
- `#smith-09` opens **The Prairie Lantern** (English Country house with a sixty-foot front porch)
- `#smith-10` opens **Ember Ranch** (compact English Country ranch with a linear fireplace and butler's pantry)
- `#smith-11` opens **Hearth Patio** (English Country house with four bedrooms, a study, and a covered patio)

- `models/smith-06-plan.png` and `models/smith-07-plan.png` are generated (clean redraws), not scanned: `s06/gen.py` / `s07/gen07.py` / `s08/gen08.py` / `s09/gen09.py` (kept outside the repo) write the plan and the model's walls/rooms from the same lists.
- To add a home, create `models/smith-0N.js` using the same format as `models/smith-02.js`, then add it to `models/registry.js`. A tab appears automatically.
