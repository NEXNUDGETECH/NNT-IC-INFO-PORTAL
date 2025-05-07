import React from "react";
import ReactMarkdown from "react-markdown";
import "./blog.css";
import { Head } from "../../components/header/Head";

const markdown = `
# 6 Technical Skills A Non-Technical Startup Founder Needs to Have

**October 19, 2016, 10:04 PM**

_By learning a small amount of technical skills, you, as a non-technical startup founder, can support your company in smaller ways. Here's our list of need-to-know technical skills._

---

**Author:**  
![John Griebel](https://randomuser.me/api/portraits/men/32.jpg)  
**John Griebel**  
*Self-taught Designer & Maker*

---

## 1. Wireframing

The first skill that all non-technical startup founders need to have is wireframing. Wireframing is an essential part of the development process as it gives everybody on the team a general idea of what the product is supposed to look like.

Typically, wireframes don’t take long to make and give the development team a roadmap to follow. For example, if your team is going to make a website, you can draw areas for a picture or write what the block will be like (e.g., where headers are, buttons, many columns, etc).
`;

export default function Blog() {
  return (
    <div className="blog">
      <Head />
      <div className="markdown-container">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
