<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syntanium Energy - Brand Essence</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,400;0,800;1,100;1,400;1,800&display=swap" rel="stylesheet">
    <style>
        .font-barlow-extrabold {
            font-family: 'Barlow', sans-serif;
            font-weight: 800;
            font-style: normal;
        }
        
        .font-barlow-thin {
            font-family: 'Barlow', sans-serif;
            font-weight: 100;
            font-style: normal;
        }
        
        .font-barlow-regular {
            font-family: 'Barlow', sans-serif;
            font-weight: 400;
            font-style: normal;
        }
        
        .pattern-bg {
            background-color: #374151; /* gray-700 */
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 20%);
            position: relative;
            overflow: hidden;
        }
        
        .pattern-bg::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
                linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1) 0),
                linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1) 0),
                rgb(55, 65, 81);
            background-position: 0 0, 10px 10px;
            background-origin: padding-box;
            background-clip: border-box;
            background-size: 20px 20px;
            opacity: 0.15;
            pointer-events: none;
        }
        
        @media (max-width: 768px) {
            .pattern-bg::before {
                background-size: 15px 15px;
            }
        }
    </style>
</head>
<body class="bg-gray-100">
    <!-- Brand Essence Section -->
    <section class="py-16 md:py-24 pattern-bg text-white transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                <!-- Left Column - Heading and Kicker -->
                <div>
                    <h2 class="text-4xl md:text-5xl font-barlow-extrabold mb-6 leading-tight">
                        Syntanium Energy:<br>
                        <span class="text-[#fe4135]">built on trust,</span><br>
                        focused on results
                    </h2>
                    <div class="h-1 w-20 bg-[#fe4135] mb-8"></div>
                </div>
                
                <!-- Right Column - Body Text -->
                <div>
                    <p class="text-xl md:text-2xl font-barlow-regular leading-relaxed mb-6">
                        Syntanium provides engineering, construction, and maintenance solutions that fuel reliable operations across the oil and gas sector.
                    </p>
                    <p class="text-xl md:text-2xl font-barlow-regular leading-relaxed">
                        We help operators protect assets, improve performance, and execute major industry projects with confidence.
                    </p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>