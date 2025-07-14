interface IValueList {
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export const ValueList: IValueList[] = [
  {
    title: "Love",
    description:
      "Love for God and for others is the foundational principle of Christian teaching.",
    icon: "mdi:heart",
    duration: "1000",
  },
  {
    title: "Truth",
    description:
      "Truth is a core value that must be upheld in all aspects of life.",
    icon: "mdi:book-open-page-variant",
    duration: "1300",
  },
  {
    title: "Faithfulness",
    description:
      "Faithfulness to God, His Word, and to one another is a reflection of genuine faith.",
    icon: "mdi:shield-check",
    duration: "1600",
  },
  {
    title: "Forgiveness",
    description:
      "Forgiving others is a key principle in Christian teaching, reflecting God's love and mercy.",
    icon: "mdi:handshake",
    duration: "1900",
  },
];
