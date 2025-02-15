import { parseInstance, parseLocation } from 'vrchat-location-parser'

console.log(
  parseLocation(
    'wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd:12345~group(grp_7ccb6ca3-cd36-4dab-9ab1-7bcf08d794e4)~groupAccessType(plus)~region(jp)~nonce(7de13c6d-5300-414c-dd18-d787b7773ee9)',
  ),
)

console.log(
  parseLocation(
    'wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd:69420~group(grp_7ccb6ca3-cd36-4dab-9ab1-7bcf08d794e4)~groupAccessType(public)~ageGate',
  ),
)

console.log(
  parseLocation(
    'wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd:69420~hidden(usr_c1644b5b-3ca4-45b4-97c6-a2a0de70d469)~region(use)',
  ),
)

console.log(
  parseLocation('wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd:69420~region(us)'),
)

console.log(
  parseInstance(
    'wrld_4432ea9b-729c-46e3-8eaf-846aa0a37fdd',
    '69420~region(us)',
  ),
)
