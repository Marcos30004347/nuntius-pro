import { deleteImage, uploadImage } from "../src/services/images";
import { setDBClient } from "../src/database/init";
import { mockSupabaseSuccess, mockSupabaseError } from  "./mock/supabase.mock"

describe('Testing image routes', () => {

  test('delete image test success', async () => {
    setDBClient(mockSupabaseSuccess);
    const { status } = await deleteImage("somename");
    expect(status).toBe("Ok");
  });

  test('delete image test error', async () => {
    setDBClient(mockSupabaseError);
    expect(deleteImage("somename")).rejects.toThrow(Error);
  });

  test('upload image test success', async () => {
    setDBClient(mockSupabaseSuccess);
    const { image_url } = await uploadImage("somename", "base64Content");
    expect(image_url).toBe("publicURL");
  });

  test('upload image test error', async () => {
    setDBClient(mockSupabaseError);
    expect(uploadImage("somename", "base64Content")).rejects.toThrow(Error);
  });
});