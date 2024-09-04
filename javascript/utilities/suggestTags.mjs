//from Live Session OOP Part 1
const tagDictionary = {
  "New Technology":
    /\b(technology|tech|innovation|cutting-edge|advanced|emerging|modern|future)\b/i,
  Summits:
    /\b(summit(s)?|event(s)?|conference(s)?|webinar(s)?|forum(s)?|symposium(s)?|meeting(s)?)\b/i,
  "Women in Tech":
    /\b(women|female(s)?|gender diversity|tech(nology)?|women in tech|women leaders|diversity in tech)\b/i,
  "Artificial Intelligence":
    /\b(artificial intelligence|AI|machine learning|deep learning)\b/i,
  Cybersecurity:
    /\b(cybersecurity|data breach|security|cyber attack|hacking|phishing)\b/i,
};

export function suggestTags(title) {
  const suggestedTags = [];
  console.log(suggestedTags);
  

  for (const [tag, regex] of Object.entries(tagDictionary)) {
    if (regex.test(title)) {
      suggestedTags.push(tag);
    }
  }
  return suggestedTags;
}
