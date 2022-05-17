package demo.util;

import static org.mockito.Mockito.when;

import java.io.File;
import java.time.LocalDate;
import java.util.UUID;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class StorageServiceTest {

	StorageService myServ;
	
	@Mock
	AmazonS3 aS3;
	
	@Mock
	UUID u;

	@BeforeEach
	void setUp() throws Exception {
		myServ = new StorageService(aS3);
	}

	@Test
	public void testUploadAWSFile() {

		// ARRANGE

		// ACT

		// ASSERT

	}

	@Test
	public void testPresignedUrl() {
		// ARRANGE
		String fileName = "";
		
		// ACT

		// ASSERT

	}

	@Test
	public void testConvertMultipartFileToFile() {
		// ARRANGE

		// ACT

		// ASSERT

	}

	@Test
	public void testConvertToDateViaInstant() {
		// ARRANGE

		// ACT

		// ASSERT

	}

}
