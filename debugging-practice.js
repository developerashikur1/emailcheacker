/* 


Module 40-5



আজকে ডিবাগিং প্রাকটিস ডে। আজকে রিলিজ হচ্ছে মডিউল ৪০.৫

#module_release #browser_debug_milestone #module_40_5

গত দুই দিন ধরে তুমি যে ডিবাগিং এবং ডেভটুল সম্পর্কে জানছো সেটাই এপ্লাই করার চেষ্টা করবা আজকে। বিশেষ করে Elements, Console, Source, ট্যাবগুলো উল্টে পাল্টে দেখবে।আগের কোন ভিডিও বুঝতে সমস্যা হলে আজকে ভালো করে দেখে ফেলবে। বুঝার চেষ্টা করবে। তারপর আজকের পুচকা মডিউল এর জাস্ট একটা ভিডিও। সেটা একটু ভালো করে খেয়াল করবে। কয়েকটা কাজ দেয়া হয়েছে। সেই কাজগুলো একটু বুঝে বুঝে করার চেষ্টা করো। স্টেপ বাই স্টেপ করবে। নিজে নিজে করবে। চেষ্টা করবে আমাদের ভিডিও না দেখে করতে পারো কিনা। যদি সেটা করতে পারো। তাহলে অসাম। আর করতে না পারলে বা কোন কিছুতে আটকে গেলে নিজে নিজে ৩০ মিনিট চেষ্টা করবে। এর পরেও না বুঝলে আমাদের গরূপে পোষ্ট দিবে। বা সাপোর্ট সেশনে জয়েন করবে। 


.

ডিবাগ চেকলিস্ট 

১. console tab utilities API লিখে গুগলে সার্চ দাও। তারপর সেই সার্চ রেজাল্টে গিয়ে ৩০-৪৫ মিনিট ধরে ধরে যা যা আছে সেগুলা পড়ো। 

// done


২. কিভাবে বুঝবে একটা বাটনে কোন একটা ইভেন্ট হ্যান্ডলার যোগ করা আছে কিনা? সেটা ডেভ টুল এর কোন কোন জায়গায় দেখা যায়। চিন্তা করে বা ডেভ টুল খুলে বের করার চেষ্টা করো।

not defined.. i think if i console on button then i need to click event listener in right sight in display.


৩. কিভাবে তুমি console ট্যাব এর মধ্যে কোন একটা ফাংশনকে কল করে সেই ফাংশনের প্রথম লাইনে কোড ব্রেক করে ফেলবে। অর্থাৎ সেখানে গেলে কোড অটোমেটিক বন্ধ হয়ে যাবে। ক্লিক করে কোন ব্রেক পয়েন্ট যোগ করা লাগবে না?

i need to write inside console that: debug(functionName)

৪. একটা কন্ডিশনাল ব্রেক পয়েন্ট সেট করতে হয় কিভাবে? সেটা নিজে নিজে সেট করে ফেলো 


not defined || parini


--------------

৫. accessibility কি জিনিস?
ans: accessbillity is the practice of making your websites usable as many as people as possible.


৬. call stack কি জিনিস? দরকার হলে গুগলে সার্চ দিয়ে শেখার চেষ্টা করো। 
ans: Javascript is the single-Threaded programming language.
A call stack function is a mechanism for an interpreter (like the javascript is an interpreter in a web) to keep trap to place in a script that calls multiple functions -what function is currently being run and what function are called from within that function. etc.


৭. Regular এক্সপ্রেশন কি জিনিস। এইটা কি কাজে লাগে?
reguler expration is the password checker or in string has anything strong like special character. thats is... it used for checking password strong or not.


৮. Lighthouse ট্যাব দিয়ে কি করে?
lighthouse tap is the perfomancechecker tap . it is most important to check website health and speed.

-------------

টাস্ক-১:

৯. সিম্পল একটা ওয়েবসাইট বানাও। সেখানে একটি ইনপুট ফিল্ডে ইমেইল লিখবে। তারপর সেটার পাশে একটা submit নামে বাটন আছে। সেই সাবমিট বাটনে চাপ দিলে রেগুলার এক্সপ্রেশন (গুগলে সার্চ দিয়ে বের করবে) দিয়ে চেক করবে এটা ভ্যালিড ইমেইল কিনা। 

১০. ইমেইল যদি ভ্যালিড হয়। তাহলে একটা গ্রিন কালার দিয়ে কোন একটা টেক্সট লিখে দিয়ে বলবে তোমার ইমেইল ঠিক আছে। আর যদি ইমেইল ঠিক না হয়। তাহলে একটা লাল কালারের টেক্সট দিয়ে বলবে। ইমেইল ঠিক নাই। ভালো করে ইমেইল দাও। 

------------

টাস্ক-২:

১১. আমাদের গিটহাব এ issue-tracker নামে একটা রিপোজিটরি আছে। সেখানে কোন একটা issue যোগ করার পর সেটাকে close করা যায়না। আবার ডিলিট ও করা যায় না। তো তোমার কাজ হচ্ছে সেই সাইটের বাগ ফিক্স করা। 

 */