import Meta from "../images/Meta_Logo.png";
import Loom from "../images/Loom_Logo.svg";
import LiIn from "../images/LinkedIn_Logo.png";

export const Jobs = [
  {
    id: 0,
    title: "Product Manager—Remote",
    company: "Meta",
    location: "USA",
    mode: "Remote",
    status: "Full-time",
    salary: "120k - 130k",
    timePast: "5mins ago",
    Image: Meta,
  },
  {
    id: 1,
    title: "Data Analytics",
    company: "Loom Inc.",
    location: "Australia",
    mode: "",
    status: "Full-time",
    salary: "120k - 130k",
    timePast: "18hrs ago",
    Image: Loom,
  },
  {
    id: 2,
    title: "Data Analytics",
    company: "Loom Inc.",
    location: "Australia",
    mode: "",
    status: "Full-time",
    salary: "120k - 130k",
    timePast: "18hrs ago",
    image: LiIn,
  },
  {
    id: 3,
    title: "Data Analytics",
    company: "Loom Inc.",
    location: "Australia",
    mode: "",
    status: "Full-time",
    salary: "120k - 130k",
    timePast: "18hrs ago",
    Image: Loom,
  },
  {
    id: 4,
    title: "Data Analytics",
    company: "Loom Inc.",
    location: "Australia",
    mode: "",
    status: "Full-time",
    salary: "120k - 130k",
    timePast: "18hrs ago",
    Image: Loom,
  },
  {
    id: 5,
    title: "Data Analytics",
    company: "Loom Inc.",
    location: "Australia",
    mode: "",
    status: "Full-time",
    salary: "120k - 130k",
    timePast: "18hrs ago",
    Image: Meta,
  },
];

const communityMembersAvatars = [
  "https://s3-alpha-sig.figma.com/img/4efe/2013/097787063aedae97d1a07c285f69b7c2?Expires=1656892800&Signature=GY5pFAnGQSx9RWqVbTR9ChSCefJ5TtzrArIluASDlDo~zlVg1cA5uc-3-reuL3kDziGPvduZ8VA7RLGvaooxJu~Db-eACSl6Ab17kKsm6YTGI0jyabw3R6PRWy~3JpiNtiqc3r7JdCIJdPrEslbQ3splRGqMVRts~UhRJ0R~mtD0I9cSRnUHLkigzFKm7~4x1kwM4oOfCMpNcGNTYdCNVIGjZlCl~PpGKl32pDXfe54QupX0t8gkZgt1Tdh8bOftHa~KQ8~HIXVxwWSCVgjv5-6O3hk4lz~jaGx~b51lBTfVspZWO8soT1NtNN53Q2UZ7KGlmC1C5BBkt6Bpt15tAQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  "https://s3-alpha-sig.figma.com/img/433d/9602/92e5f9ab3789c788a9900fa9aeae9751?Expires=1656892800&Signature=NvVqbC9jlrFR7UJ-EfBO1zROX21lNiBOI5vXwdd60Z2kj1j0Zv9xqKJPdyzkXQHTj2eU~r-bOGB0ZIP0QtjLIpXrngN-L-tOJgGFz7oplGMzR9x1X7Y8WHHPB5lbr10j3P9O7srwhc-AzheZmwef-BHEy4PqYceOC1VdFTSsdrD3DAhvL35Sr1pgpHhkMVpSHTN~gUeOTGVAdanwYudphKOVirfvc0-qk6k3UKi5e4WWJEPhYiH5AVmFf3NDUTElFEzzNlvRDuBYaXJs2NlYfB-xDMcTBJAVWjyB9ZHrxtt6Yqv3apUyRGs4uaif-diwDCL3FR0gQO1iP6oSY7bGOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
];

const AvatarBgs = ["#BCAEFF", "#F2C94C", "#8CDFB3", "#FAB592"];

const CommunityMembersAvatarList = () => [
  {
    id: 0,
    memberAvatar: communityMembersAvatars[0],
    AvatarBg: AvatarBgs[Math.floor(Math.random() * AvatarBgs.length)],
  },
  {
    id: 1,
    memberAvatar: communityMembersAvatars[1],
    AvatarBg: AvatarBgs[Math.floor(Math.random() * AvatarBgs.length)],
  },
  {
    id: 2,
    memberAvatar: communityMembersAvatars[0],
    AvatarBg: AvatarBgs[Math.floor(Math.random() * AvatarBgs.length)],
  },
];

export const CommunityChannels = [
  {
    id: 0,
    channel: "Product Management",
    memberAvatars: CommunityMembersAvatarList(),
    membersCount: 107,
  },
  {
    id: 1,
    channel: "Product Design",
    memberAvatars: CommunityMembersAvatarList(),
    membersCount: 291,
  },
  {
    id: 2,
    channel: "Web Development",
    memberAvatars: CommunityMembersAvatarList(),
    membersCount: 21,
  },
];

export const PodcastsList = [
  {
    id: 0,
    title: "Women In Tech Q&A Series",
    artiste: "Martyna Lewinska, Co-Founder and CTO at Fiat Republic",
    time: "12mins",
    img: "https://s3-alpha-sig.figma.com/img/644e/6b4b/a09a40e7adcf80041887a4a17703a183?Expires=1656892800&Signature=NybfrMpPcljeyn4d4sS2Aa9NcubiXERonRSBxE~im5Muzoer~OBnhLUpHSu6DkxCLG7hb2fIUzRgRK2ugJCXYr0a9N2eRSCTez6xD7DZ7vwp~Mj7UOqz9dLum~7lKzJ60bEDLyD2Ppsf-U6tvn1Dnk040ebx5b3r7gqlr1GIWYHG1cQ4psQctjVdwqrxE97ubGL-zNpoVbxBX96y5Vgi-2gOxcvbtSgjbvg6ere35J6fai8tao2raP1K~JzlIchnf6v3lSnPi8X6ftccv7O~RgrUGNKAh4g6YwAE720bJVGouphEkMvt6aq01O4IenmgWKfKeN1vQZZC9mQYnK5ffg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: 1,
    title: "Women In Tech Q&A Series",
    artiste: "Martyna Lewinska, Co-Founder and CTO at Fiat Republic",
    time: "12mins",
    img: "https://s3-alpha-sig.figma.com/img/644e/6b4b/a09a40e7adcf80041887a4a17703a183?Expires=1656892800&Signature=NybfrMpPcljeyn4d4sS2Aa9NcubiXERonRSBxE~im5Muzoer~OBnhLUpHSu6DkxCLG7hb2fIUzRgRK2ugJCXYr0a9N2eRSCTez6xD7DZ7vwp~Mj7UOqz9dLum~7lKzJ60bEDLyD2Ppsf-U6tvn1Dnk040ebx5b3r7gqlr1GIWYHG1cQ4psQctjVdwqrxE97ubGL-zNpoVbxBX96y5Vgi-2gOxcvbtSgjbvg6ere35J6fai8tao2raP1K~JzlIchnf6v3lSnPi8X6ftccv7O~RgrUGNKAh4g6YwAE720bJVGouphEkMvt6aq01O4IenmgWKfKeN1vQZZC9mQYnK5ffg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];
