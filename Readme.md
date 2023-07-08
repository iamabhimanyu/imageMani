-----------Image Manipulation API using Node.js and Sharp.js-----------
This project provides a Node.js API for image manipulation using the Sharp.js library. It allows you to resize, crop, apply filters, and convert images to different formats based on URL parameters.

-----------Setup-----------
1. Clone the repository:
     git clone https://github.com/iamabhimanyu/imageMani.git
2. Install dependencies:
     cd imageMani
     npm install
3. Run the server (The server will start running on http://localhost:3000):
   nodemon index.js

-----------API Usage-----------

-----------Endpoint------------
 GET /manipulate?url={IMAGE_URL}&width={WIDTH}&height={HEIGHT}&crop={CROP}&bw={BW}&format={FORMAT}&float={FLOAT}

---------URL Parameters--------
url (required): The URL of the image to be manipulated.
width (optional): The desired width of the manipulated image.
height (optional): The desired height of the manipulated image.
crop (optional): Set to true to crop the image to fit the specified dimensions.
bw (optional): Set to true to apply black and white filter to the image.
format (optional): The desired format of the manipulated image (e.g., jpg, png, webp).
float (optional): The float style to be applied to the image (e.g., left, right).

-----------Examples------------
1. Resize image to width=300 and height=200:
    GET /manipulate?url=https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&width=300&height=200
2. Crop image to width=500 and height=500:
    GET /manipulate?url=https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&width=500&height=500&crop=true
3. Apply black and white filter to the image:
    GET /manipulate?url=https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&bw=true
4. Convert image format to PNG:
    GET /manipulate?url=https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&format=png
5. Float the image to the left:
    GET /manipulate?url=https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&float=left

------Additional Information-----  
It is important to thoroughly test the codebase to ensure proper image manipulation and handling of different scenarios. Consider the following cases:
 -Varying input parameters: Test the API with different combinations of width, height, crop, bw, format, and float parameters to verify that the image manipulation results are as expected.
 -Different image formats: Test the API with images of different formats (JPEG, PNG, etc.) to ensure proper handling and conversion.
 -Edge cases: Test the API with edge cases such as very large images, very small images, and invalid URLs to validate error handling and graceful failure.

-------Conclusion----------
This project provides a Node.js API for image manipulation using Sharp.js. By following the setup instructions and utilizing the API endpoint, you can manipulate images by specifying URL parameters.
Remember to test and validate the codebase thoroughly to ensure the desired image manipulation tasks are executed correctly.

