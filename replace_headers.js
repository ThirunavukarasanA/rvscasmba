const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "components/faculty/FacultySlug.tsx");
let content = fs.readFileSync(filePath, "utf8");

// Replace the wrapper div
content = content.replace(
  /<div className="flex flex-col pt-4  pb-12">[\s\S]*?<div className="space-y-10">/,
  `<div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 mt-8 md:mt-12">
                    <div className="col-span-1 md:col-span-12 space-y-12">`,
);

// Regex to find and replace section headers
// Old format:
// <div className="pt-8 border-t border-gray-200">
//     <div className="w-16 h-0.5 bg-booth-maroon mb-3"></div>
//     <h2 className="text-lg md:text-2xl font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb-4">
//         Title
//     </h2>

const regex =
  /<div className="pt-8 border-t border-gray-200">\s*<div className="w-16 h-0.5 bg-booth-maroon mb-3"><\/div>\s*<h2 className="text-lg md:text-2xl font-trade-gothic-bold text-booth-dark-gray uppercase tracking-wider mb(?:-6|-4)">\s*(.*?)\s*<\/h2>/g;

content = content.replace(regex, (match, title) => {
  let id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `<div id="${id}" className="pt-8 border-t border-gray-200">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 md:w-16 h-[3px] md:h-[4px] bg-[#900000] shrink-0"></div>
                                        <h2 className="text-2xl md:text-3xl font-trade-gothic-light text-booth-dark-gray tracking-wide">
                                            ${title}
                                        </h2>
                                    </div>`;
});

// Fix the closing divs at the very bottom
// We had 2 closing divs before: </div> </section>
// Now we need 3: </div> </div> </div> </section>
const bottomRegex = /<\/div>\s*<\/div>\s*<\/section>/;
content = content.replace(
  bottomRegex,
  `</div>\n                    </div>\n                </div>\n            </div>\n        </section>`,
);

fs.writeFileSync(filePath, content, "utf8");
console.log("Done replacing headers and structure!");
