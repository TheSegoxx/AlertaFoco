from PIL import Image, ImageDraw, ImageFilter

W, H = 64, 64
img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(img)

# red circular prohibition badge
cx, cy = 32, 32
for i in range(10, 0, -1):
    r = 27 + i * 0.8
    alpha = 255 - (10 - i) * 12
    d.ellipse((cx - r, cy - r, cx + r, cy + r), outline=(200, 17, 17, alpha), width=2)
d.ellipse((cx - 26, cy - 26, cx + 26, cy + 26), outline=(200, 17, 17, 255), width=4)
d.line((8, 32, 56, 32), fill=(200, 17, 17, 255), width=5)

# mosquito body
body = (13, 22, 52, 44)
d.ellipse(body, fill=(70, 50, 38, 255), outline=(25, 25, 25, 255), width=2)
# head and thorax
for box in [(18, 18, 30, 28), (34, 18, 46, 28), (20, 29, 44, 41)]:
    d.ellipse(box, fill=(72, 52, 38, 255), outline=(25, 25, 25, 255), width=2)
# wings
d.polygon([(14, 17), (4, 6), (20, 2), (28, 12)], fill=(190, 220, 235, 255), outline=(25, 25, 25, 255), width=2)
d.polygon([(50, 17), (60, 6), (44, 2), (36, 12)], fill=(190, 220, 235, 255), outline=(25, 25, 25, 255), width=2)
# legs
legs = [((18, 43), (12, 58)), ((24, 44), (18, 62)), ((34, 44), (42, 60)), ((42, 44), (52, 58))]
for a, b in legs:
    d.line((a, b), fill=(25, 25, 25, 255), width=3)
# proboscis
for points in [((32, 39), (32, 58), (12, 58)), ((32, 39), (32, 58), (52, 58))]:
    d.line(points, fill=(25, 25, 25, 255), width=3)
# eyes
for x in (23, 39):
    d.ellipse((x - 3, 22, x + 3, 28), fill=(255, 255, 255, 255))
    d.ellipse((x - 1, 23, x + 1, 27), fill=(240, 62, 62, 255))
# mouth
for points in [((22, 34), (32, 40), (44, 34))]:
    d.line(points, fill=(255, 90, 90, 255), width=3)
# small claws / angry accent
for points in [((16, 36), (10, 42)), ((48, 36), (54, 42))]:
    d.line(points, fill=(25, 25, 25, 255), width=2)

# roughness and transparent background
img = img.filter(ImageFilter.SMOOTH_MORE)
img.save('assets/favicon-alertafoco.png')
img.save('assets/favicon-alertafoco.ico')
print('Generated assets/favicon-alertafoco.png and assets/favicon-alertafoco.ico')
