import openai
from decouple import config

api_key = config('OPENAI_API_TOKEN')

from openai import OpenAI

client = OpenAI(api_key=api_key)

response = client.images.generate(
  model="dall-e-2",
  prompt="我想要喜氣洋洋、有鞭炮跟舞龍舞獅",
  size="256x256",
  quality="standard",
  n=1,
)

image_url = response.data[0].url
print(image_url)
