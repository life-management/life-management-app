import sys

sys.path.append("../LmApi")

from django.test import RequestFactory, TestCase
from LmApi.views import index


# Create your tests here.
class BasicTestCase(TestCase):
    def setUp(self):
        self.factory = RequestFactory()

    def test_basic(self):
        request = self.factory.get("")
        response = index(request)
        self.assertEqual(response.status_code, 200)

    # def test_basic2(self):
    #     request = self.factory.get("")
    #     response = index(request)
    #     self.assertEqual(response.status_code, 200)
